"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

# @api.route('/token', methods=['POST'])
# def handle_token():
#    return jsonify(response_body), 200

@app.route('/register', methods=['POST'])
def register():
    password = request.json.get('password', None)
    email = request.json.get('email', None)
    name = request.json.get('name', None)
    ## tipo de usuario
    last_name = request.json.get('name', None)
    
    
    
    if password is None:
        return 'You need to specify the password', 400
    if email is None:
        return 'You need to specify the email', 400

    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({"msg" : "User already exist"})
    else: 
        new_user = User(email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg" : "User added successfully!"}), 200
