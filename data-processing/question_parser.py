import os
import json
import base64
from openai import OpenAI
import firebase_admin
from firebase_admin import credentials, storage
from PIL import Image
import io
from dotenv import load_dotenv

# Initialize Firebase
cred = credentials.Certificate("firebase_key.json")
firebase_admin.initialize_app(cred, {"storageBucket": "psle-math-b8dff.appspot.com"})
load_dotenv()
# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def extract_and_upload_image(image_data, storage_path):
    with open("res.txt", "w") as output_file:
        output_file.write(image_data)
    # Decode base64 image

    image_bytes = base64.b64decode(image_data)
    image = Image.open(io.BytesIO(image_bytes))

    # Here you would implement logic to extract the chart
    # For now, we'll just upload the whole image

    # Upload to Firebase Storage
    bucket = storage.bucket()
    blob = bucket.blob(storage_path)
    blob.upload_from_string(image_bytes, content_type="image/jpeg")

    # Make the blob publicly accessible
    blob.make_public()

    return blob.public_url


# Define the function for OpenAI


def process_image(image_path):

    with open(image_path, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")
        messages = [
            {
                "role": "system",
                "content": "You are a math teacher who wants to classify hardcopy math questions to an online database. When given an image, you should return the JSON format of the question. If there's a chart or graph in the question, you should extract it.",
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/jpeg;base64,{image_data}"},
                    }
                ],
            },
        ]
    response = client.chat.completions.create(
        tools=[
            {
                "type": "function",
                "function": {
                    "name": "extract_and_upload_image",
                    "description": "Extracts a chart or image from the question and uploads it to storage",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "image_data": {
                                "type": "string",
                                "description": "Base64 encoded image data of the chart or image to be extracted",
                            },
                            "storage_path": {
                                "type": "string",
                                "description": "The path in Firebase storage where the image should be uploaded",
                            },
                        },
                        "required": ["image_data", "storage_path"],
                    },
                },
            }
        ],
        model="gpt-4o",
        tool_choice="auto",
        messages=messages,
    )
    response_message = response.choices[0].message
    tool_calls = response_message.tool_calls
    # Step 2: check if the model wanted to call a function
    if tool_calls:
        # Step 3: call the function
        # Note: the JSON response may not always be valid; be sure to handle errors
        available_functions = {
            "extract_and_upload_image": extract_and_upload_image,
        }  # only one function in this example, but you can have multiple
        messages.append(response_message)  # extend conversation with assistant's reply
        # Step 4: send the info for each function call and function response to the model
        for tool_call in tool_calls:
            function_name = tool_call.function.name
            function_to_call = available_functions[function_name]
            function_args = json.loads(tool_call.function.arguments)
            function_response = function_to_call(
                image_data=function_args.get("image_data"),
                storage_path=function_args.get("storage_path"),
            )
            messages.append(
                {
                    "tool_call_id": tool_call.id,
                    "role": "tool",
                    "name": function_name,
                    "content": function_response,
                }
            )  # extend conversation with function response
        second_response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
        )  # get a new response from the model where it can see the function response
        return second_response


result = process_image("example.jpg")
print(json.dumps(result, indent=2))
