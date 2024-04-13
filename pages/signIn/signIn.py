# SignIn PY
from flask import Blueprint, session, render_template, redirect, url_for, request
from db_connector import users_collection  # Import users_collection directly

# signIn blueprint definition
signIn = Blueprint(
    'signIn',
    __name__,
    static_folder='static',
    static_url_path='/signIn',
    template_folder='templates'
)

# Initialize error_message as None
error_message = None


@signIn.route('/')
@signIn.route('/signIn', methods=['GET', 'POST'])
def index():
    global error_message  # Use the global error_message variable

    # Check if the request method is POST
    if request.method == 'POST':
        # Retrieve form data
        email = request.form.get('email')
        password = request.form.get('password')

        # Check if email and password are provided
        if not email or not password:
            error_message = 'Please provide both email and password.'
            return render_template('signIn.html', error_message=error_message)

        # Check if email exists in the Users collection
        user = users_collection.find_one({'email': email})
        if user:
            # Check if password matches
            if user.get('password') == password:
                return redirect(url_for('homepage.index'))
            else:
                error_message = 'Incorrect password.'
        else:
            error_message = 'Email not found.'

        return render_template('signIn.html', error_message=error_message)

    # Clear error_message when rendering the page for GET requests
    error_message = None
    return render_template('signIn.html', error_message=error_message)


# Logout route
@signIn.route('/logout')
def logout():
    # Clear the user's session
    session.clear()
    # Redirect the user to the sign-in page
    return redirect(url_for('signIn.index'))
