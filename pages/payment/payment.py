from flask import Blueprint
from flask import render_template


# payment blueprint definition
payment = Blueprint(
    'payment',
    __name__,
    static_folder='static',
    static_url_path='/payment',
    template_folder='templates'
)


# Routes
@payment.route('/')
@payment.route('/payment')
def index():
    return render_template('payment.html')


