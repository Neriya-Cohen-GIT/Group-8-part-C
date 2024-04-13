import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Secret key setting for Flask sessions
SECRET_KEY = os.environ.get('SECRET_KEY')

# DB URI for MongoDB
DB_URI = os.environ.get('DB_URI')

# Other DB configurations (if needed)
DB_HOST = os.environ.get('DB_HOST')
DB_PORT = os.environ.get('DB_PORT')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')
DB_NAME = os.environ.get('DB_NAME')
