from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp  
#import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=False, nullable=False)
    last_name = db.Column(db.String(30), unique=False, nullable=False)
    birth_date = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=True)
    user_role = db.Column(db.Integer, unique=False, nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    profile_photo = db.Column(db.String(100), nullable = False)
    about_me_short = db.Column(db.String(80), nullable = False)
    about_me_long = db.Column(db.Text, nullable = False)
    addresses = db.relationship('Address', backref='user', lazy=True)
    buddy = db.relationship("Buddy", backref="user", uselist = False)
    owner = db.relationship("Owner", backref="user", uselist = False)

    def __repr__(self):
        return '<User %r>' % self.username

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "birth_date": self.birth_date,
            "email": self.email,
            "phone": self.phone,
            "user_role": self.user_role,
            "is_active": self.is_active,
            "profile_photo": self.profile_photo,
            "about_me_short": self.about_me_short,
            "about_me_long": self.about_me_long
            # do not serialize the password, its a security breach
        }

class Address(db.Model):
    __tablename__ = 'address'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey ('user.id'), nullable=False)
    exact_address = db.Column(db.String(50), nullable=False)
    provincia = db.Column(db.String(15), nullable=False)
    canton = db.Column(db.String(15), nullable=False)
    distrito = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return '<Address %r>' % self.id
    
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "exact_address": self.exact_address,
            "provincia": self.provincia,
            "canton": self.canton,
            "distrito": self.distrito
        }

class Owner(db.Model):
    __tablename__ = 'owner'
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey ('user.id'))
    pets = db.relationship('Pet', backref='person', lazy = True)
    comments = db.relationship('Comment', backref = 'owner', lazy = True)
    reservations = db.relationship('Reservation', backref = 'owner', lazy = True)

    def __repr__(self):
        return '<Owner %r>' % self.user_id
    
    def to_dict(self):
        return {
            "user_id": self.user_id
        }
    
class Pet(db.Model):
    __tablename__ = 'pet'
    id = db.Column(db.Integer, primary_key=True)
    pet_name = db.Column(db.String(30),unique=True, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('owner.id'), nullable=False)
    specie = db.Column(db.String(10))
    size = db.Column(db.String(10))
    activity = db.Column(db.String(10))
    sex = db.Column(db.String(10))
    sterilized = db.Column(db.Boolean())
    vaccinated = db.Column(db.Boolean())
    dewormed = db.Column(db.Boolean())
    personality = db.Column(db.String(150))
    
    def __repr__(self):
        return '<Pet %r>' % self.name
    
    def to_dict(self):
        return {
            "id": self.id,
            "pet_name": self.pet_name,
            "owner_id": self.owner_id,
            "owner": self.owner,
            "specie": self.specie,
            "size": self.size,
            "activity": self.activity,
            "sex": self.sex,
            "sterilized": self.sterilized,
            "vaccinated": self.vaccinated,
            "dewormed": self.dewormed,
            "personality": self.personality
        }


class Buddy(db.Model):
    __tablename__ = 'buddy'
    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.String(30))
    user_id = db.Column(db.ForeignKey ('user.id'))
    #comment_id = db.Column(db.Integer, db.ForeignKey ('comment.id'))
    other_skills = db.Column(db.String(100))
    size_accepted = db.Column(db.String(10))
    comments = db.relationship('Comment', backref = 'buddy', lazy = True)
    reservations = db.relationship('Reservation', backref = 'buddy', lazy = True)

    def __repr__(self):
        return '<Buddy %r>' % self.user_id

    def to_dict(self):
        return {
            "id": self.id,
            "service": self.service,
            "user_id": self.user_id,
            "other_skills": self.other_skills,
            "size_accepted": self.size_accepted
        }

class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    comment_body= db.Column(db.Text)
    count_rating= db.Column(db.Integer)
    id_buddy = db.Column(db.Integer, db.ForeignKey ('buddy.id'))
    id_owner = db.Column(db.Integer, db.ForeignKey ('owner.id'))
    #un owner puede hacer varios comentarios, pero 1 comentario le pertenece a un mismo owner
    #un buddy tiene muchos comentarios, pero un buddy sólo le pertenece 1 comentario

    def __repr__(self):
        return '<Comment %r>' % self.id

    def to_dict(self):
        return {
            "id": self.id,
            "comment_body": self.comment_body,
            "count_rating": self.count_rating,
            "id_buddy": self.id_buddy,
            "id_owner": self.id_owner,
        }

class Reservation(db.Model):
    __tablename__ = 'reservation'
    id = db.Column(db.Integer, primary_key = True)
    id_buddy = db.Column(db.Integer, db.ForeignKey ('buddy.id'))
    id_owner = db.Column(db.Integer, db.ForeignKey ('owner.id'))
    reservation_date = db.Column(db.String(20))
    reservation_service = db.Column(db.String(10))
    reservation_state = db.Column(db.String(10))
    #created_at = db.Column(db.DateTime, default=datetime.datetime.now())

    def __repr__(self):
        return '<Reservation %r>' % self.id

    def to_dict(self):
        return {
            "id": self.id,
            "id_buddy": self.id_buddy,
            "id_owner": self.id_owner,
            "reservation_date": self.reservation_date,
            "reservation_service": self.reservation_service,
            "reservation_state": self.reservation_state
        }
