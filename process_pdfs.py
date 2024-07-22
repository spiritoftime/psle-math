import fitz  # PyMuPDF
import os

def convert_pdf_pages_to_images(input_pdf_path, output_folder):
    # Open the input PDF file
    pdf_document = fitz.open(input_pdf_path)
    
    # Iterate through each page
    for page_number in range(len(pdf_document)):
        # Get the page
        page = pdf_document.load_page(page_number)
        
        # Convert page to image (pixmap)
        pix = page.get_pixmap()
        
        # Create the output file path
        output_file_path = os.path.join(output_folder, f"{os.path.splitext(os.path.basename(input_pdf_path))[0]}_page_{page_number + 1}.png")
        
        # Save the image to the output folder
        pix.save(output_file_path)
        print(f"Saved {os.path.basename(input_pdf_path)} page {page_number + 1} as image to {output_file_path}")
    
    # Close the input PDF file
    pdf_document.close()
    print(f"Conversion of {os.path.basename(input_pdf_path)} completed.")

def process_pdfs(input_folder, output_folder):
    # Create the output folder if it does not exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Loop through all PDF files in the input folder
    for filename in os.listdir(input_folder):
        if filename.lower().endswith('.pdf'):
            input_pdf_path = os.path.join(input_folder, filename)
            print(f"Processing {filename}...")
            convert_pdf_pages_to_images(input_pdf_path, output_folder)

if __name__ == "__main__":
    # Define input and output folders using relative paths
    input_folder = 'training-data/math-papers'
    output_folder = 'training-data/visual-detection'
    
    # Process all PDFs in the input folder
    process_pdfs(input_folder, output_folder)
