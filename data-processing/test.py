from PIL import Image

# Path to your image file
image_path = './training-data/visual-detection/P6_Maths_2023_SA2_ACS_Junior_page_2.png'  # Replace with your image path

# Open the image
with Image.open(image_path) as img:
    # Coordinates for cropping
    left = 99
    top = 510
    right = 445
    bottom = 733

    # Define the crop box (left, top, right, bottom)
    crop_box = (left, top, right, bottom)

    # Crop the image
    cropped_img = img.crop(crop_box)

    # Show the cropped image
    cropped_img.show()
    
