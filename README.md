# Farmlytics

**AI-Powered Agricultural Intelligence Platform**

Smart crop recommendation, disease detection, and fertilizer suggestions using ML/DL to help farmers make data-driven decisions.

---

## ✨ Features

- **🌱 Crop Recommendation** - Analyze soil conditions and get crop suggestions
- **🧪 Fertilizer Recommendations** - Precise fertilizer guidance for your soil & crop
- **🔍 Crop Disease Detection** - AI image recognition for instant crop disease diagnosis
- **📱 Modern UI** - Beautiful, responsive interface with Bootstrap 5

---

## 📸 Screenshots

![Homepage](image1.png)
![Crop Recommendation](image2.png)
![Fertilizer Recommendation](image3.png)
![Disease Detection](image4.png)
![Results Page](image5.png)

---

## 🚀 Quick Start

**Local Setup (5 min)**
```bash
git clone https://github.com/ankit7610/FarmPrediction.git
cd FarmPrediction
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python Farmlytics/app.py
```
Open `http://localhost:5000`

**Docker**
```bash
docker build -t farmlytics .
docker run -p 5000:5000 farmlytics
```

---

## ☁️ Deploy

**Render (Free tier available)**
1. Go to [render.com](https://render.com)
2. Create Web Service → Connect GitHub repo
3. Set env: `FLASK_APP=Farmlytics/app.py`
4. Deploy!

**Google Cloud Run**
```bash
gcloud run deploy farmlytics --source . --platform managed --region us-central1 --allow-unauthenticated --port 5000
```

---

## 📊 Datasets

- [Crop Recommendation](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset)
- [Fertilizer Prediction](https://www.kaggle.com/datasets/gdabhishek/fertilizer-prediction)
- [Plant Diseases](https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset)

---

## 🛠 Tech Stack

- **Backend:** Flask 2.0.3
- **ML/DL:** TensorFlow 2.10.0, scikit-learn
- **Frontend:** Bootstrap 5, HTML5, CSS3
- **Deployment:** Docker, Render, Cloud Run

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details

---

## 📧 Questions?

Open an issue on [GitHub](https://github.com/ankit7610/FarmPrediction/issues)
