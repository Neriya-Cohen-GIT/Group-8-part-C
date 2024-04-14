# Import necessary modules
from flask import Blueprint, render_template



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


