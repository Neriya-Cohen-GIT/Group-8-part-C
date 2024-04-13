from flask import Blueprint
from flask import render_template, request, redirect, url_for

# contactUs blueprint definition
contactUs = Blueprint(
    'contactUs',
    __name__,
    static_folder='static',
    static_url_path='/contactUs',
    template_folder='templates'
)


# Routes
@contactUs.route('/')
@contactUs.route('/contactUs', methods=['GET', 'POST'])
def index():
    msg = request.args.get('msg')
    if request.method == 'POST':
        return contactUs_post()
    return render_template('contactUs.html', msg=msg)


def contactUs_post():
    # Get form details
    email = request.form.get('email')
    name = request.form.get('name')
    message = request.form.get('message')

    # Validate form details
    if not email or not name or not message:
        # Missing form details, redirect to error page or display error message
        return render_template('contactUs.html',
                               error_message='Please fill in all the required fields')

    # request sent
    return redirect(url_for('contactUs.index', msg="Thank you for contacting us! We will try to answer as "
                                                   "soon as possible."))
