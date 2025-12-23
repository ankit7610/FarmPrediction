import pytest
from playwright.sync_api import Page, expect
import threading
import time
from app import app as flask_app

# Function to run the Flask app in a separate thread
def run_app():
    flask_app.run(port=5001, debug=False, use_reloader=False)

@pytest.fixture(scope="session", autouse=True)
def server():
    thread = threading.Thread(target=run_app)
    thread.daemon = True
    thread.start()
    time.sleep(2)  # Give the server a moment to start
    yield
    # Thread will be killed when the session ends

def test_homepage_loads(page: Page):
    """Verify the homepage loads correctly."""
    page.goto("http://localhost:5001")
    expect(page).to_have_title("Farmlytics - Smart Farming with AI")
    expect(page.locator("text=Grow Smarter with Intelligent Farming")).to_be_visible()

def test_navigation_to_crop_recommendation(page: Page):
    """Test navigation to the crop recommendation page."""
    page.goto("http://localhost:5001")
    # Click on the service button
    page.click("text=Get Recommendation")
    expect(page).to_have_url("http://localhost:5001/crop-recommendation")
    expect(page.locator("h1")).to_contain_text("Crop Recommendation")

def test_crop_recommendation_form(page: Page):
    """Test the crop recommendation form submission (UI flow)."""
    page.goto("http://localhost:5001/crop-recommendation")
    
    # Fill the form with correct field names
    page.fill("input[name='N']", "90")
    page.fill("input[name='P']", "42")
    page.fill("input[name='K']", "43")
    page.fill("input[name='temperature']", "20")
    page.fill("input[name='humidity']", "82")
    page.fill("input[name='phosphore']", "6.5") # This is pH in the template
    page.fill("input[name='rainfall']", "202")
    
    # Submit
    page.click("button[type='submit']")
    
    # Check result page
    expect(page.locator(".result-section")).to_be_visible()

def test_navigation_to_disease_detection(page: Page):
    """Test navigation to the disease detection page."""
    page.goto("http://localhost:5001")
    page.click("text=Services")
    page.click("text=Disease Detection")
    expect(page).to_have_url("http://localhost:5001/crop-disease")
    expect(page.locator("h1")).to_contain_text("Crop Disease Detection")
