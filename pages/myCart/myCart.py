# Import necessary modules
from flask import Blueprint, render_template, request, jsonify, session
from pymongo import MongoClient

# MongoDB connection setup
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database']  # Replace 'your_database' with the name of your MongoDB database

# myCart blueprint definition
myCart = Blueprint(
    'myCart',
    __name__,
    static_folder='static',
    static_url_path='/myCart',
    template_folder='templates'
)


# Routes
@myCart.route('/')
@myCart.route('/myCart')
def index():
    return render_template('myCart.html')


@myCart.route('/cart_items', methods=['GET'])
def get_cart_items():
    # Get the current user's cart from MongoDB based on the user's session
    user_cart = db['carts'].find_one({'user_id': session.get('user_id')})

    # If the user has a cart, return it, otherwise, return an empty list
    cart_items = user_cart['items'] if user_cart else []

    return jsonify(cart_items)


@myCart.route('/remove_from_cart/<string:item_id>', methods=['POST'])
def remove_from_cart(item_id):
    try:
        # Remove the item from the user's cart in the database
        db['carts'].update_one(
            {'user_id': session.get('user_id')},
            {'$pull': {'items': {'_id': item_id}}}
        )
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})
