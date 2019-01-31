'''server/app.py - main api app declaration'''
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='../build')
CORS(app)

##
# API routes
##

@app.route('/api/items')
def items():
    '''Sample API route for data'''

    print("serving api items2")

    return jsonify([{'title': 'AAAA'}, {'title': 'BBBB'}])



@app.route('/db/<path:path>', methods=['GET'])
def forward_item(path):
    print("getting call for ",path)

    ret = {'id': 2, 'text': path}

    return jsonify([{'id':1, 'text': 'aaa'}, ret])


##
# View route
##

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    print("non api-route detected ", path)
    '''Return index.html for all non-api routes'''
    #pylint: disable=unused-argument
    return send_from_directory(app.static_folder, 'index.html')






