#!/usr/bin/env python3

import os
from pathlib import Path

# Supported image extensions
IMAGE_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".gif",
    ".bmp", ".webp", ".tiff", ".tif"
}

# Current folder
folder = Path.cwd()

# Get all image files
images = [
    f for f in folder.iterdir()
    if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS
]

# Sort files alphabetically
images.sort(key=lambda x: x.name.lower())

# First rename to temporary names to avoid conflicts
temp_files = []
for i, image in enumerate(images, start=1):
    temp_name = folder / f"__temp__{i}{image.suffix.lower()}"
    image.rename(temp_name)
    temp_files.append(temp_name)

# Rename to final sequential names
for i, temp_file in enumerate(temp_files, start=1):
    new_name = folder / f"{i}{temp_file.suffix.lower()}"
    temp_file.rename(new_name)
    print(f"Renamed: {temp_file.name} -> {new_name.name}")

print(f"\nDone! Renamed {len(temp_files)} images.")