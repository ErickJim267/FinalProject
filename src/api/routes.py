"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import shortuuid
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Owner, Buddy, Address, Reservation, Comment, Pet
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, current_user
import datetime


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
            new_owner = Owner(user_id=_id)
            db.session.add(new_owner)
            db.session.commit()
        else:
            new_buddy = Buddy(user_id=_id)
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
    print(user)

    if not user or not user.check_password(password):
     #if email != user.email or password != user.password:
        # user not found on the db o password error
        return jsonify({"msg": "Invalidate email or password"}), 401
    else:
        expiration = datetime.timedelta(days=1)
        # create a new token with user_id
        access_token = create_access_token(identity=user, expires_delta=expiration)
        return jsonify({"token" : access_token, "user_id" : user.id}), 200

## OBTENER TODOS LOS BUDDYS ##
@api.route("/buddy", methods=["GET"])
def get_all_buddy():
    result = db.session.query(User, Buddy).join(User.buddy).all()

    if result is None:
        return jsonify({"msg": 'No existing Buddys yet!'}), 409
    else:
        buddy_content = [{ "buddy": dict(user.to_dict(), **buddy.to_dict()) } for user, buddy in result]
        return jsonify(buddy_content), 200
    
## OBTENER USUARIO LOGUEADO ##
@api.route("/user-auth", methods=["GET"])
@jwt_required()
def get_user():
    result = None
    
    if  current_user.user_role == "buddy":
        result = db.session.query(User, Buddy).join(User.buddy).filter(User.id == current_user.id)
    else:
        result = db.session.query(User, Owner).join(User.owner).filter(User.id == current_user.id)
        
    if result is None:
        return jsonify({"msg": 'No existing User yet!'}), 409
    else:
        role_content = [{ "user": dict(user.to_dict(), **role.to_dict()) } for user, role in result]
        return jsonify(role_content), 200

## ACTUALIZAR BUDDY ##
@api.route("/buddy/<string:id>", methods=["PUT"])
def update_buddy(id):
    # result = db.session.query(User, Buddy).join(User.buddy).filter(User.id=id)
    body = request.get_json()
    user = User.query.get(id=id)
    buddy = Buddy.query.get(user_id=id)
    address = Address.query.get(user_id=id)

    if user is None:
        return jsonify({"msg": "User not found"}), 400

    if "phone" in body:
        user.phone = body["phone"]
    if "birth_date" in body:
        user.birth_date = body["birth_date"]
    if "provincia" in body:
        address.provincia = body["provincia"]
    if "exact_address" in body:
        address.exact_address = body["exact_address"]
    if "size_accepted" in body:
        buddy.size_accepted = body["size_accepted"]
    if "service" in body:
        buddy.service = body["service"]
    if "about_me_short" in body:
        user.about_me_short = body["about_me_short"]
    if "about_me_long" in body:
        user.about_me_long = body["about_me_long"]
    if "other_skills" in body:
        buddy.other_skills = body["other_skills"]
    if "user_photo" in body:
        user.user_photo = body["user_photo"]
    
    db.session.add(user)
    db.session.add(buddy)
    db.session.add(address)
    db.session.commit()

    return jsonify({"msg" : "Your user update successfully!"}), 200

## ACTUALIZAR OWNER ##
@api.route("/owner/<string:id>", methods=["PUT"])
def update_owner(id):
    # result = db.session.query(User, Buddy).join(User.buddy).filter(User.id=id)
    body = request.get_json()
    user = User.query.get(id=id)
    owner = Buddy.query.get(user_id=id)
    address = Address.query.get(user_id=id)
    pet = Pet.query.get(user_id=id)

    if user is None:
        return jsonify({"msg": "User not found"}), 400

    if "phone" in body:
        user.phone = body["phone"]
    if "birth_date" in body:
        user.birth_date = body["birth_date"]
    if "about_me_short" in body:
        user.about_me_short = body["about_me_short"]
    if "about_me_long" in body:
        user.about_me_long = body["about_me_long"]
    if "user_photo" in body:
        user.user_photo = body["user_photo"]
    if "provincia" in body:
        address.provincia = body["provincia"]
    if "exact_address" in body:
        address.exact_address = body["exact_address"]
    if "pet_name" in body:
        pet.pet_name = body["pet_name"]
    if "specie" in body:
        pet.specie = body["specie"]
    if "gender" in body:
        pet.sex = body["gender"]
    if "pet_photo" in body:
        pet.pet_photo = body["pet_photo"]
    if "breed" in body:
        pet.breed = body["breed"]
    if "range_age" in body:
        pet.range_age = body["range_age"]
    if "size" in body:
        pet.size = body["size"]
    if "vaccinated" in body:
        pet.vaccinated = body["vaccinated"]
    if "Dewormed" in body:
        pet.Dewormed = body["Dewormed"]
    if "sterilized" in body:
        pet.sterilized = body["sterilized"]
    if "personality" in body:
        pet.personality = body["personality"]
    
    db.session.add(user)
    db.session.add(buddy)
    db.session.add(address)
    db.session.commit()

    return jsonify({"msg" : "Your user update successfully!"}), 200

## OBTENER TODOS LOS OWNERS ##
@api.route("/owner", methods=["GET"])
def get_all_owner():
    result = db.session.query(User, Owner).join(User.owner).all()

    if result is None:
        return jsonify({"msg": 'No existing Buddys yet!'}), 409
    else:
        # print(result)
        owner_content = [{ "owner": dict(user.to_dict(), **owner.to_dict()) } for user, owner in result]
        return jsonify(owner_content), 200

## AGREGAR RESERVACION ##
@api.route("/reservation", methods=["POST"])
def add_reservation():
    # _id = request.json.get('id', None)
    exact_address = request.json.get('exact_address', None)
    id_buddy = request.json.get('id_buddy', None)
    reservation_date = request.json.get('reservation_date', None)
    reservation_service = request.json.get('reservation_service', None)
    provincia = request.json.get('provincia', None)

    # if _id is None:
    #     return 'You need to specify the password', 400
    if reservation_date is None:
        return 'You need to specify the reservation date', 400
    if reservation_service is None:
        return 'You need to specify a service', 400

    new_reservation = Reservation(exact_address=exact_address, id_buddy=id_buddy, reservation_date=reservation_date, reservation_service=reservation_service, provincia=provincia)
    db.session.add(new_reservation)
    db.session.commit()

    return jsonify({"msg" : "Your reservation added successfully!"}), 200

## ACTUALIZAR RESERVACION ##
@api.route("/reservation/<int:id>", methods=["PUT"])
def update_reservation(id):
    body=request.get_json()
    reservation = Reservation.query.get(id)

    if reservation is None:
        return jsonify({"msg": "Reservation not found"}), 400

    if "reservation_date" in body:
        reservation.reservation_date = body["reservation_date"]
    if "reservation_service" in body:
        reservation.reservation_service = body["reservation_service"]
    if "provincia" in body:
        reservation.provincia = body["provincia"]
    if "exact_address" in body:
        reservation.exact_address = body["exact_address"]
    if "id_buddy" in body:
        reservation.id_buddy = body["id_buddy"]

    db.session.add(reservation)
    db.session.commit()

    return jsonify({"msg" : "Your reservation update successfully!"}), 200

## AGREGAR COMENTARIO ##
@api.route("/comment", methods=["POST"])
def add_comment():
    # _id = request.json.get('id', None)
    exact_address = request.json.get('exact_address', None)
    id_buddy = request.json.get('id_buddy', None)
    comment_body = request.json.get('comment_body', None)
    count_rating = request.json.get('count_rating', None)

    # if _id is None:
    #     return 'You need to specify the password', 400
    # if comment_body is None:
    #     return 'You need to specify a comment', 400
    if count_rating is None:
        return 'You need to specify a rating', 400

    new_comment = Comment(exact_address=exact_address, id_buddy=id_buddy, comment_body=comment_body, count_rating=count_rating)
    db.session.add(new_comment)
    db.session.commit()

    return jsonify({"msg" : "Your reservation added successfully!"}), 200
