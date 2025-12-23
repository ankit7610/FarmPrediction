import pytest
import numpy as np
import os
from functions import get_diseases_classes, crop_diseases_classes

def test_get_diseases_classes():
    """Test the disease class mapping function."""
    # Test apple healthy
    assert get_diseases_classes('apple', 3) == 'healthy'
    # Test apple scab
    assert get_diseases_classes('apple', 0) == 'Apple scab'
    # Test tomato healthy
    assert get_diseases_classes('tomato', 9) == 'healthy'
    # Test tomato bacterial spot
    assert get_diseases_classes('tomato', 0) == 'Bacterial spot'

def test_crop_list_exists():
    """Verify the crop list is populated."""
    from functions import crop_list
    assert len(crop_list) > 0
    assert 'apple' in crop_list
    assert 'tomato' in crop_list

def test_crops_list_exists():
    """Verify the crops list is populated."""
    from functions import crops
    assert len(crops) > 0
    assert 'rice' in crops
