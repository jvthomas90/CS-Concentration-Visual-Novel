from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    """A homepage."""
    return render_template('landing_page.html')

@app.route('/info_page')
def info_page():
    """A page for users to input their personal information."""
    return render_template('info_page.html')

#@app.route('/novel')
#needs dialog, options, page numbers, 
#might need the pages options connect to, and background scene changes 
#could also have to use users: name(in most cases), age or gender in some dialogs  

if __name__ == '__main__':
    app.run(debug=True)