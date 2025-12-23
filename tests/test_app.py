import pytest
import io

def test_index_route(client):
    """Test the homepage route."""
    response = client.get('/')
    assert response.status_code == 200
    assert b"Farmlytics" in response.data

def test_crop_recommendation_get(client):
    """Test the crop recommendation GET route."""
    response = client.get('/crop-recommendation')
    assert response.status_code == 200
    assert b"Crop Recommendation" in response.data

def test_fertilizer_recommendation_get(client):
    """Test the fertilizer recommendation GET route."""
    response = client.get('/fertilizer-recommendation')
    assert response.status_code == 200
    assert b"Fertilizer Recommendation" in response.data

def test_crop_disease_get(client):
    """Test the crop disease GET route."""
    response = client.get('/crop-disease')
    assert response.status_code == 200
    assert b"Crop Disease Detection" in response.data

def test_crop_recommendation_post(client, mocker):
    """Test the crop recommendation POST route with mocked prediction."""
    # Mock the get_crop_recommendation function to avoid loading models
    mocker.patch('app.get_crop_recommendation', return_value='rice')
    
    data = {
        'nitrogen': '90',
        'phosphorus': '42',
        'potassium': '43',
        'temperature': '20',
        'humidity': '82',
        'ph': '6.5',
        'rainfall': '202'
    }
    response = client.post('/crop-recommendation', data=data)
    assert response.status_code == 200
    assert b"rice" in response.data

def test_fertilizer_recommendation_post(client, mocker):
    """Test the fertilizer recommendation POST route with mocked prediction."""
    mocker.patch('app.get_fertilizer_recommendation', return_value='Urea')
    
    data = {
        'temperature': '26',
        'humidity': '52',
        'moisture': '38',
        'soil_type': '0',
        'crop_type': '0',
        'nitrogen': '37',
        'potassium': '0',
        'phosphorus': '0'
    }
    response = client.post('/fertilizer-recommendation', data=data)
    assert response.status_code == 200
    assert b"Urea" in response.data

def test_crop_disease_post(client, mocker):
    """Test the crop disease POST route with mocked prediction."""
    mocker.patch('app.img_predict', return_value=3) # 3 is healthy for apple
    mocker.patch('app.get_diseases_classes', return_value='healthy')
    
    data = {
        'crop': 'apple',
        'file': (io.BytesIO(b"fake image data"), 'test.jpg')
    }
    response = client.post('/crop-disease', data=data, content_type='multipart/form-data')
    assert response.status_code == 200
    assert b"healthy" in response.data
