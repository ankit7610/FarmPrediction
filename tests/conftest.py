import pytest
import sys
import os

# Add the Farmlytics directory to sys.path so we can import app and functions
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'Farmlytics')))

from app import app as flask_app

@pytest.fixture
def app():
    flask_app.config.update({
        "TESTING": True,
    })
    return flask_app

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def runner(app):
    return app.test_cli_runner()
