import torch
from torchvision import transforms
from PIL import Image
import sys, json

# Dummy return for now
# Later we map EfficientNet weights → brand & type
print(json.dumps({
    "brand": "Honda",
    "type": "Vario 125",
    "condition": "Bekas"
}))
