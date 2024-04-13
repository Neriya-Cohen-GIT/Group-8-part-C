from flask import Blueprint
from flask import render_template

# homepage blueprint definition
homepage = Blueprint(
    'homepage',
    __name__,
    static_folder='static',
    static_url_path='/homepage',
    template_folder='templates'
)


# Routes
@homepage.route('/')
@homepage.route('/homepage')
def index():
    return render_template('homepage.html')


