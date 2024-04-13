# Registers PY
import re
from flask import Blueprint, render_template, redirect, url_for, request, session
from db_connector import users_collection  # Import users_collection directly from the DB connector

# Registers blueprint definition
registers = Blueprint(
    'registers',
    __name__,
    static_folder='static',
    static_url_path='/registers',
    template_folder='templates'
)


# Routes
@registers.route('/')
def index():
    return render_template('registers.html')


@registers.route('/', methods=['POST'])
def registers_post():
    # Get form details
    email = request.form.get('email')
    password = request.form.get('password')
    name = request.form.get('name')
    phone = request.form.get('phone')
    birthdate = request.form.get('birthdate')

    # Validate form details
    if not email or not password or not name or not phone or not birthdate:
        # Missing form details, redirect to error page or display error message
        return render_template('registers.html', error_message='Please fill in all the required fields')

    # Validate email address using regular expression
    if not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', email):
        return render_template('registers.html', error_message='Please enter a valid email address')

    # Check if user already exists
    existing_user = users_collection.find_one({'email': email})
    if existing_user:
        # User already exists, redirect to error page or display error message
        return render_template('registers.html', error_message='This user already exists')

    # Create new user
    new_user = {
        'email': email,
        'password': password,
        'name': name,
        'phone': phone,
        'birthdate': birthdate
    }

    # Insert the new user into the users collection
    users_collection.insert_one(new_user)

    # Redirect to homepage
    return redirect(url_for('homepage.index'))
