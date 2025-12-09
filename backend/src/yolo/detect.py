from ultralytics import YOLO
import sys, json

model = YOLO("backend/model/yolo_motor.pt")
image = sys.argv[1]

results = model(image)
boxes = results[0].boxes.xyxy.tolist()
conf = results[0].boxes.conf.tolist()

print(json.dumps({
    "boxes": boxes,
    "confidence": conf
}))
