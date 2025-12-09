import xgboost as xgb
import json, sys
import numpy as np
import pickle

model = pickle.load(open("backend/model/xgb_price.bin", "rb"))
payload = json.loads(sys.argv[1])

# Contoh variabel:
features = np.array([
    len(payload["scraped"]),       # estimasi supply
    np.mean(payload["scraped"]),   # avg scraped price
]).reshape(1, -1)

pred = model.predict(features)[0]
print(pred)
