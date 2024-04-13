import os
import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from settings import DB_URI

# GETTING URI FROM .ENV FILE
uri = DB_URI

# CREATING CLUSTER
client = MongoClient(uri, server_api=ServerApi('1'), tls=True, tlsAllowInvalidCertificates=True)

# GETTING ALL DBs AND COLLECTIONS
db = client['CakeForYou']
users = db['users']
cakes = db['cakes']
pastries = db['pastries']


# CREATING/ADDING NEW USER
def create_user(email, password, fName, lName, age):
    new_user = {
        'email': email,
        'password': password,
        'first_name': fName,
        'last_name': lName,
        'age': age
    }
    users.insert_one(new_user)


# DOES THE USER REGISTERED
def check_registration(email):
    return bool(get_user_by_email(email))


# FINDING USER BY EMAIL
def get_user_by_email(email):
    return users.find_one({'email': email})


# CHECKING WHETHER THE USER IS LOGGED IN
def login(email, password):
    user = get_user_by_email(email)
    if user is None:
        return False
    return user['password'] == password


# CAKES
# GET CAKES SORTED BY PRICE
def get_cakes():
    return cakes.find().sort('price')


# GET CAKES BY NAME
def find_cake(name):
    return cakes.find_one({'name': name})


# PASTRIES
# GET PASTRIES SORTED BY PRICE
def get_pastries():
    return pastries.find().sort('price')


# GET PASTRIES BY NAME
def find_pastery(name):
    return pastries.find_one({'name': name})
