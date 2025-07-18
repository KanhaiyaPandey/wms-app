import tkinter as tk
from tkinter import filedialog, messagebox
from tkinter.ttk import Button, Label
from sku_mapper import SKUMapper
import os

def run_mapper():
    file_path = filedialog.askopenfilename(filetypes=[("CSV files", "*.csv")])
    if file_path:
        file_path_var.set(file_path)
        try:
            # Initialize mapper and process file
            mapper = SKUMapper()
            mapper.load_mapping("master_mapping.csv")  # ensure this file exists
            mapper.process_file(file_path)
            messagebox.showinfo("Success", "Mapping completed! Check the 'output' folder.")
        except Exception as e:
            messagebox.showerror("Error", str(e))

root = tk.Tk()
root.title("SKU to MSKU Mapper")
root.geometry("500x200")

file_path_var = tk.StringVar()

label = Label(root, text="Select a CSV file for mapping:")
label.pack(pady=10)

file_label = Label(root, textvariable=file_path_var)
file_label.pack()

run_button = Button(root, text="Run Mapper", command=run_mapper)
run_button.pack(pady=20)

root.mainloop()
