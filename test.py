from PIL import Image

# Path to your image file
image_path = 'example.jpg'  # Replace with your image path

# Open the image
with Image.open(image_path) as img:
    # Coordinates for cropping
    left = 60
    top = 100
    right = 480
    bottom = 440

    # Define the crop box (left, top, right, bottom)
    crop_box = (left, top, right, bottom)

    # Crop the image
    cropped_img = img.crop(crop_box)

    # Show the cropped image
    cropped_img.show()