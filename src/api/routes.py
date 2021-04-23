"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST', 'GET'])
def handle_register():

    response_body = {
        "message": "Hello! I'm the register"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST', 'GET'])
def handle_login():

    response_body = {
        "message": "Hello! I'm the login"
    }

    return jsonify(response_body), 200

