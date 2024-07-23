# Data-Processing
Contains exploratory effort to process data. For now, this is limited to taking in a pdf/ image, and extracting the question & its visuals out.
test.py - given a image test the bounding boxes returned by ai agent.
process_pdfs.py - takes in a pdf and returns all pages as images, so that they can be passed into chatgpt api to parse
question_parser.pdf - given an image extract the question and visuals. 
# Current issue: it is unable to crop the visual in the question and return it. To do so, will need to explore manual tagging at labelbox, then fine tuning chatgpt to return the bounding boxes more accurately. an agent (gpt 3) to call the pil function on the bounding boxes could be added.
  For now, no idea how to train ai to classify the question yet. Probably will explore after i myself know what question categories are there.

## Getting Started:
1) cd data-processing
2) python -m venv venv to create virtual env to install dependencies
If virtual env already created:
- Windows: source venv/Scripts/activate
- Mac: source venv/bin/activate
- pip install requirements.txt
3) create a .env file with OPENAI_API_KEY=whatever it is
create a firebase project and get firebase.json.
4) Go to the Firebase Console (https://console.firebase.google.com/)
  Steps:
  - Create a new project (or use an existing one)
  - Go to Project Settings > Service Accounts
  - Generate a new private key and download the JSON file
  - Rename it to firebase_key.json and place it in your project folder

