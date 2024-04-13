from flask import Blueprint
from flask import render_template


# ordersMenu blueprint definition
ordersMenu = Blueprint(
    'ordersMenu',
    __name__,
    static_folder='static',
    static_url_path='/ordersMenu',
    template_folder='templates'
)


# Routes
@ordersMenu.route('/')
@ordersMenu.route('/ordersMenu')
def index():
    return render_template('ordersMenu.html')





