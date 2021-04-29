"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import shortuuid
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Owner, Buddy, Address, Reservation, Comment, Pet
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

@api.route('/register', methods=['POST'])
def register():
    _id = request.json.get('id', None)
    password = request.json.get('password', None)
    email = request.json.get('email', None)
    name = request.json.get('name', None)
    user_role = request.json.get('role', None)
    ## tipo de usuario
    last_name = request.json.get('last_name', None)
    
    if _id is None:
        return 'You need to specify the password', 400
    if password is None:
        return 'You need to specify the password', 400
    if email is None:
        return 'You need to specify the email', 400
    if name is None:
        return 'You need to specify the name', 400
    if last_name is None:
        return 'You need to specify the last_name', 400
    if user_role is None:
        return 'You need to specify the user_rol', 400

    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({"msg" : "User already exist"}), 409
    else: 
        new_user = User(id=_id, email=email, password=password, name=name, last_name=last_name, user_role=user_role, is_active=True)
        db.session.add(new_user)
        db.session.commit()
        if user_role == 'owner':
            new_owner = Owner(id=shortuuid.uuid(), user_id=_id)    
            db.session.add(new_owner)
            db.session.commit()
        else:
            new_buddy = Buddy(id=shortuuid.uuid(), user_id=_id)    
            db.session.add(new_buddy)
            db.session.commit()
        
        return jsonify({"msg" : "User added successfully!"}), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    password = request.json.get('password', None)
    email = request.json.get('email', None)

    if password is None:
        return 'You need to specify the password', 400
    if email is None:
        return 'You need to specify the email', 400

    user = User.query.filter_by(email=email).one_or_none()
    
    if not user or not user.check_password(password):
        # user not found on the db o password error
        return jsonify({"msg": "Invalidate email or password"})
    else:
        # create a new token with user_id
        access_token = create_access_token(identity=user)
        return jsonify({"token" : access_token, "user_id" : user.id}), 200

@api.route("/buddy", methods=["GET"])
def get_all_buddy():
    result = db.session.query(User, Buddy).join(User.buddy).all()
   
    if result is None:
        return jsonify({"msg": 'No existing Buddys yet!'}), 409
    else:
        buddy_content = [{ "buddy": dict(user.to_dict(), **buddy.to_dict()) } for user, buddy in result]
        return jsonify(buddy_content), 200
    
@api.route("/owner", methods=["GET"])
def get_all_owner():
    result = db.session.query(User, Owner).join(User.owner).all()
   
    if result is None:
        return jsonify({"msg": 'No existing Buddys yet!'}), 409
    else:
        # print(result)
        owner_content = [{ "owner": dict(user.to_dict(), **owner.to_dict()) } for user, owner in result]
        return jsonify(owner_content), 200

@api.route("/reservation", methods=["POST"])
def add_reservation():
    # _id = request.json.get('id', None)
    id_owner = request.json.get('id_owner', None)
    id_buddy = request.json.get('id_buddy', None)
    reservation_date = request.json.get('reservation_date', None)
    reservation_service = request.json.get('reservation_service', None)
    
    # if _id is None:
    #     return 'You need to specify the password', 400
    if reservation_date is None:
        return 'You need to specify the reservation date', 400
    if reservation_service is None:
        return 'You need to specify a service', 400

    new_reservation = Reservation(id_owner=id_owner, id_buddy=id_buddy, reservation_date=reservation_date, reservation_service=reservation_service, reservation_state=False)
    db.session.add(new_reservation)
    db.session.commit()
       
    return jsonify({"msg" : "Your reservation added successfully!"}), 200
  

