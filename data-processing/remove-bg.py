#!/usr/bin/env python3

from pathlib import Path
from rembg import remove, new_session

def remove_background(folder_path):
    # Create a new session
    session = new_session()

    # Process all images in the folder
    for file in Path(folder_path).glob('*'):
        if file.suffix.lower() in ('.png', '.jpg', '.jpeg'):
            input_path = str(file)
            output_path = str(file.with_stem(file.stem + "_nobg"))

            with open(input_path, 'rb') as i:
                with open(output_path, 'wb') as o:
                    input_data = i.read()
                    output_data = remove(input_data, session=session)
                    o.write(output_data)

            print(f"Processed: {file.name} -> {Path(output_path).name}")



# Usage
folder_path = "../open-math-prep/public/questions/geometry"

remove_background(folder_path)