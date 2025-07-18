import pandas as pd
import os

class SKUMapper:
    def __init__(self, mapping_file="mapping.csv"):
        self.mapping = self.load_mapping(mapping_file)

    def load_mapping(self, mapping_file):
        if not os.path.exists(mapping_file):
            print("[!] Mapping file not found. Using mock mappings.")
            return {}

        df = pd.read_csv(mapping_file)
        if "SKU" not in df.columns or "MSKU" not in df.columns:
            raise ValueError("Mapping file must contain 'SKU' and 'MSKU' columns.")

        return dict(zip(df["SKU"], df["MSKU"]))

    def map_sku(self, sku):
        # Handle combo SKUs like "SKU1+SKU2"
        if "+" in sku:
            parts = sku.split("+")
            mapped = [self.mapping.get(p.strip(), f"MSKU-{p.strip()}") for p in parts]
            return "+".join(mapped)

        return self.mapping.get(sku, f"MSKU-{sku}")

    def process_file(self, file_path):
        try:
            df = pd.read_csv(file_path)

            if "SKU" not in df.columns:
                raise ValueError("CSV must contain a 'SKU' column.")

            df["MSKU"] = df["SKU"].apply(self.map_sku)

            # Save to output
            output_dir = "output"
            os.makedirs(output_dir, exist_ok=True)
            output_file = os.path.join(output_dir, "mapped_output.csv")
            df.to_csv(output_file, index=False)

            print(f"[\u2713] Mapping complete. File saved to: {output_file}")
            return output_file
        except Exception as e:
            print(f"[\u2717] Error during processing: {e}")
            raise
