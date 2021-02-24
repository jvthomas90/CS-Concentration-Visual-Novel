from flask import Flask, render_template

main = Flask(__name__)

@main.route('/')
def landingpage():
    return render_template('landing_page.html')

if __name__ == '__main__':
    main.run(debug=True)  