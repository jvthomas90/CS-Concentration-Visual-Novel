from flask import Flask, render_template

main = Flask(__name__)

@main.route('/')
def landing_page():
    '''render intial landing page'''
    return render_template('landing_page.html')


# @main.route('/novel-page/<page_num>')
# def novel_page():
#     content = {
#         user_options: 'insert user options text here',
#         dialogue: 'insert dialogue here',
#         next_page: 'insert next page here'
#     }

#     return render_template('novel_page.html', **content)

if __name__ == '__main__':
    main.run(debug=True)  