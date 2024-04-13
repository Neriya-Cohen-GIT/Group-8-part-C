from flask import Flask

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages

## Register
from pages.registers.registers import registers
app.register_blueprint(registers)


## Sign In
from pages.signIn.signIn import signIn
app.register_blueprint(signIn)


## Homepage
from pages.homepage.homepage import homepage
app.register_blueprint(homepage)

## About Us
from pages.aboutUs.aboutUs import aboutUs
app.register_blueprint(aboutUs)

## Contact Us
from pages.contactUs.contactUs import contactUs
app.register_blueprint(contactUs)


## My Cart
from pages.myCart.myCart import myCart
app.register_blueprint(myCart)

## Orders Menue
from pages.ordersMenu.ordersMenu import ordersMenu
app.register_blueprint(ordersMenu)

## Payment
from pages.payment.payment import payment
app.register_blueprint(payment)





## Profile
##from pages.profile.profile import profile

##app.register_blueprint(profile)

## Profile
##from pages.menu.menu import menu

##app.register_blueprint(menu)

## Catalog
##from pages.catalog.catalog import catalog

##app.register_blueprint(catalog)

## Page error handlers
from pages.page_error_handlers.page_error_handlers import page_error_handlers

app.register_blueprint(page_error_handlers)

###### Components
## Main menu
from components.main_menu.main_menu import main_menu

app.register_blueprint(main_menu)

# @app.route('/login')
# def login():
#     return render_template("sign in.html", boolean=True)
#
#
# @app.route('/logout')
# def logout():
#     return "<p>Logout<p>"
#
#
# @app.route('/sign-up')
# def sign_up():
#     return render_template("create account.html")
#
#
# @app.route('/confirm cart')
# def confirm_cart():
#     return render_template("payment.html")
#
#
# @app.route('/confirm purchase')
# def confirm_purchase():
#     return render_template("homePage.html")
#
#
# @app.route('/move-to-cart')
# def move_to_cart():
#     return render_template("my cart.html")
#
#
# @app.route('/create-account', methods=['POST'])
# def create_account(users=None):
#     data = request.form
#     username = data.get('username')
#     email = data.get('email')
#     password = data.get('password')
#
#     # Validate input
#     if not username or not email or not password:
#         return jsonify({'error': 'Incomplete data provided'}), 400
#
#     # Check if the username is already taken
#     if any(user['username'] == username for user in users):
#         return jsonify({'error': 'Username already exists'}), 400
#
#     # Create new user
#     new_user = {'username': username, 'email': email, 'password': password}
#     users.append(new_user)
#
#     # Redirect to homepage after successful account creation
#     return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
