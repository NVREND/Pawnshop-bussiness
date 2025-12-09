#  AI Pegadaian

Sistem ini menerima foto motor, melakukan deteksi objek, mengidentifikasi merek/tipe,
mengestimasi harga pasar berdasarkan scraping OLX secara real time, lalu memberikan estimasi harga
menggunakan model XGBoost.

---

## 🚀 Tech Stack

### Backend
- Node.js + Express
- PostgreSQL + pg (database)
- YOLO custom model (motor detection)
- EfficientNet (image feature extraction)
- XGBoost (price regression model)

### Frontend
- React (prototype)
- File upload photo

### AI Models
- `yolo_motor.pt` → hasil training YOLO custom
- `xgb_price.bin` → hasil training XGBoost

---

## Flow

1. User upload gambar motor
2. Backend memvalidasi file
3. YOLO detection → memastikan objek = motor
4. Feature extraction → brand, type
5. Backend scrape harga OLX → harga pasaran
6. XGBoost → prediksi harga akhir
7. Simpan hasil ke PostgreSQL
8. Kembalikan estimasi ke frontend