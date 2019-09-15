from flask import (Flask, request, abort)
#for reading operating system data
import os
#tell our app where our saved model is
sys.path.append(os.path.abspath("./model"))
from load import *

app = Flask(__name__);

@app.route("/")
def hello():
    return "hello"

@app.route("/login", methods=["POST"])
def login():
    username = request.args['username']
    return username


if __name__ == '__main__':
    #decide what port to run the app in
	port = int(os.environ.get('PORT', 5000))
	#run the app locally on the givn port
	app.run(host='0.0.0.0', port=port)
	#optional if we want to run in debugging mode
	#app.run(debug=True)
