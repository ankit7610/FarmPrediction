# Farmlytics

**AI-Powered Agricultural Intelligence Platform**

A modern, production-ready web application combining machine learning and deep learning to help farmers make data-driven decisions. With intelligent systems for crop selection, disease detection, and fertilizer recommendations, Farmlytics empowers farmers to optimize yields and reduce costs.

---

## 🌾 Overview

Farmlytics bridges the gap between traditional farming and modern agricultural technology. Our intelligent platform analyzes soil properties, environmental conditions, and crop images to provide actionable insights that drive better farming decisions.

**What We Solve:**
- 🌍 **Limited access** to expert agricultural advice for small-scale farmers
- 📊 **Inefficient crop selection** based on soil and climate conditions  
- 🧪 **Lack of guidance** on fertilizer selection for specific soil types
- 🔍 **Early disease detection** to prevent crop loss and maximize yield

---

## ✨ Core Features

### 🌱 Crop Recommendation System
Analyzes soil NPK levels, moisture, temperature, and rainfall to recommend the most suitable crops for your farm's unique conditions. Make informed planting decisions backed by data.

### 🧪 Fertilizer Recommendations
Provides precise fertilizer suggestions based on soil type, pH, temperature, crop type, and moisture levels. Optimize crop health, improve growth, and maximize yield efficiency.

### 🔍 Crop Disease Detection
AI-powered image recognition system that instantly identifies crop diseases and evaluates plant health. Get quick diagnosis and treatment recommendations for fast intervention.

### 📱 Modern, Responsive UI
Beautiful, professional interface built with Bootstrap 5 and custom animations. Seamless experience across desktop, tablet, and mobile devices.

---

## 📸 Platform Screenshots

### 1. Homepage & Hero Section
![Homepage](image1.png)

*Professional landing page with intuitive navigation and feature overview*

---

### 2. Crop Recommendation Interface
![Crop Recommendation](image2.png)

*Easy-to-use form for analyzing soil conditions and receiving personalized crop recommendations*

---

### 3. Fertilizer Recommendation System
![Fertilizer Recommendation](image3.png)

*Input soil properties and crop type to get precise fertilizer recommendations with NPK analysis*

---

### 4. Disease Detection Upload Interface
![Disease Detection](image4.png)

*Drag-and-drop interface for uploading crop images with instant disease detection*

---

### 5. Detailed Results & Analysis
![Results Page](image5.png)

*Comprehensive results with confidence scores, recommendations, and treatment options*

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+ or Docker installed
- Git (for cloning the repository)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankit7610/FarmPrediction.git
   cd FarmPrediction
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python Farmlytics/app.py
   ```

5. **Open in browser**
   Navigate to `http://localhost:5000`

---

## 🐳 Docker Deployment

### Build and Run Locally

```bash
# Build the image
docker build -t farmlytics:latest .

# Run the container
docker run -p 5000:5000 \
  -e FLASK_ENV=production \
  -e FLASK_APP=Farmlytics/app.py \
  farmlytics:latest
```

Visit `http://localhost:5000`

### Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag the image
docker tag farmlytics:latest YOUR_USERNAME/farmlytics:latest

# Push to registry
docker push YOUR_USERNAME/farmlytics:latest
```

---

## ☁️ Production Deployment

### Option 1: Deploy to Render (Recommended)

**Simple, free tier available, auto-deploys from GitHub**

1. Go to [render.com](https://render.com)
2. Create new "Web Service"
3. Connect your GitHub repository
4. Set environment variables:
   - `FLASK_ENV` = `production`
   - `FLASK_APP` = `Farmlytics/app.py`
5. Deploy!

**Or use Docker image:**
- Set "Docker" as runtime
- Point to Dockerfile in repo
- Render will build and deploy automatically

### Option 2: Google Cloud Run

**Serverless deployment, pay-per-use model**

```bash
# Install Google Cloud SDK
# Reference: https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com

# Build and deploy
gcloud run deploy farmlytics \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 5000 \
  --set-env-vars FLASK_ENV=production,FLASK_APP=Farmlytics/app.py
```

### Option 3: Alternative Platforms

- **Railway.app** - Modern, easy to use, free tier
- **PythonAnywhere** - Python-focused hosting
- **AWS EC2** - For more control and scale
- **Heroku** - Traditional PaaS (no free tier)

---

## 📦 Project Structure

```
Farmlytics/
├── app.py                    # Flask application entry point
├── functions.py              # ML model loading & prediction functions
├── requirements.txt          # Python dependencies
├── Dockerfile               # Container configuration
├── static/
│   ├── css/main.css         # Modern, responsive styling
│   ├── js/my.js             # Frontend JavaScript
│   └── images/              # Static assets
├── templates/               # Jinja2 HTML templates
│   ├── index.html           # Homepage
│   ├── crop-recommend.html  # Crop recommendation form
│   ├── fertilizer-recommend.html
│   ├── crop-disease.html    # Disease detection upload
│   ├── recommend_result.html
│   └── disease-prediction-result.html
├── models/
│   ├── DL_models/           # Pre-trained TensorFlow/Keras (.h5) files
│   │   ├── apple_model.h5
│   │   ├── cherry_model.h5
│   │   ├── corn_model.h5
│   │   ├── grape_model.h5
│   │   ├── potato_model.h5
│   │   ├── peach_model.h5
│   │   ├── pepper_model.h5
│   │   ├── strawberry_model.h5
│   │   └── tomato_model.h5
│   └── ML_models/           # Scikit-learn models
└── dataset/                 # Training datasets (CSV)
    ├── Crop_recommendation.csv
    └── Fertilizer Prediction.csv
```

---

## 🛠 Tech Stack

- **Backend:** Flask 2.0.3
- **ML/DL:** TensorFlow 2.10.0, scikit-learn, NumPy, Pandas
- **Frontend:** Bootstrap 5.1.1, HTML5, CSS3, JavaScript
- **Database:** CSV-based (extensible to SQL)
- **Containerization:** Docker
- **Deployment:** Render, Cloud Run, Railway, AWS

---

## 📊 Models & Datasets

Our models are trained on high-quality agricultural datasets from Kaggle:

| Feature | Dataset | Link |
|---------|---------|------|
| Crop Recommendation | Agricultural Soil Data | [Kaggle Dataset](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset) |
| Fertilizer Prediction | Fertilizer Soil Data | [Kaggle Dataset](https://www.kaggle.com/datasets/gdabhishek/fertilizer-prediction) |
| Disease Detection | Plant Disease Images | [Kaggle Dataset](https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset) |

---

## 🔐 Environment Variables

For production deployment, set these environment variables:

```bash
FLASK_ENV=production
FLASK_APP=Farmlytics/app.py
PORT=5000
```

**Optional (for cloud storage):**
```bash
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_S3_BUCKET=your_bucket_name
```

---

## 🧪 Testing the Application

### Test Crop Recommendation
1. Navigate to "Crop Recommendation"
2. Enter soil parameters (N, P, K levels, pH, moisture, etc.)
3. View recommendations for suitable crops

### Test Fertilizer Suggestion
1. Go to "Fertilizer Recommendation"
2. Input soil type, crop, and environmental data
3. Get fertilizer recommendations with NPK breakdown

### Test Disease Detection
1. Go to "Crop Disease Detection"
2. Upload a crop image (JPG/PNG)
3. AI model analyzes and provides diagnosis with confidence score

---

## 📈 Performance & Optimization

- **Model Inference:** <2s average response time on GPU
- **Page Load:** <2s on 4G connection
- **Database:** CSV-based, can scale to PostgreSQL/MongoDB
- **Caching:** Browser caching for static assets
- **CDN Ready:** Deploy static files to CloudFront/CloudFlare

---

## 🐛 Troubleshooting

### Issue: TensorFlow-macOS errors on Linux
**Solution:** Ensure `requirements.txt` uses `tensorflow==2.10.0` (not tensorflow-macos) for Linux deployment.

### Issue: Model files not loading
**Solution:** Verify `.h5` files are in `Farmlytics/models/DL_models/` directory. For cloud deployment, consider using cloud storage (S3/GCS).

### Issue: h5py build errors
**Solution:** Install system dependencies:
```bash
# macOS
brew install pkg-config hdf5

# Ubuntu/Debian
sudo apt-get install pkg-config libhdf5-dev
```

### Issue: Port already in use
**Solution:** Change the port or kill the process using port 5000:
```bash
# macOS/Linux
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

## 🚀 Production Checklist

- [ ] Environment variables configured
- [ ] Static files served via CDN
- [ ] Models loaded from cloud storage (optional)
- [ ] Error logging & monitoring enabled
- [ ] HTTPS/SSL certificate installed
- [ ] Database backed up regularly
- [ ] Rate limiting implemented
- [ ] CORS properly configured
- [ ] Security headers set
- [ ] Health check endpoint tested

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 📧 Contact & Support

- **GitHub:** [github.com/ankit7610/FarmPrediction](https://github.com/ankit7610/FarmPrediction)
- **Issues:** Report bugs via GitHub Issues
- **Discussions:** Join our community discussions for ideas and feedback

---

## 🙏 Acknowledgments

- Kaggle for providing high-quality agricultural datasets
- TensorFlow and scikit-learn communities
- Bootstrap and Font Awesome for UI components
- All contributors and users of Farmlytics

---

**Last Updated:** December 2025 | **Version:** 2.0.0 (Professional UI Redesign)
