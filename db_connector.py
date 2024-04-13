from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from settings import DB_URI

# Get your URI from .env file
uri = DB_URI

# Create cluster
client = MongoClient(uri, server_api=ServerApi('1'), tls=True, tlsAllowInvalidCertificates=True)

# Get all dbs and collections that are needed
db = client['CakeForYou']
users_collection = db['users']
cakes_collection = db['cakes']
pastries_collection = db['pastries']


def find_all_users():
    users = list(users_collection.find())
    print(users)


def find_all_cakes():
    cakes = list(cakes_collection.find())
    print(cakes)


def find_all_pastries():
    pastries = list(pastries_collection.find())
    print(pastries)


