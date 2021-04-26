from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp  
import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(30),unique=True, nullable=False)
    last_name = db.Column(db.String(30),unique = False,nullable = False)
    #birth_date = db.Column(db.Datetime, default = datetime, unique = True, nullable = False)
    email = db.Column(db.String(30),unique = True, nullable = False)
    password = db.Column(db.String(30))
    phone = db.Column(db.Integer,unique = True, nullable = False)
    user_rol = db.Column(db.Integer, unique = False, nullable = False)
    is_active = db.Column(db.Boolean(), unique = False, nullable = False)
    #url_photo = db.Column(db.String(100), unique = False, nullable = False)
    #about_me_short = db.Column(db.String(80))
    #about_me_long = db.Column(db.Text)
    addresses = db.relationship('Address', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email
            # do not serialize the password, its a security breach
        }

class Address(db.Model):
    __tablename__ = 'address'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey ('user.id'), nullable=False)
    #exact_address = db.Column(db.String(50))
    #provincia = db.Column(db.String(15))
    #canton = db.Column(db.String(15))
    #distrito = db.Column(db.String(15))

    def __repr__(self):
        return '<Address %r>' % self.id
    
    def to_dict(self):
        return {}

class Owner(db.Model):
    __tablename__ = 'owner'
    #id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey ('user.id'), primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey ('pet.id'))
    #reservation = db.Column(db.String())
    pets = db.relationship('Pet', backref='person', lazy=True)
    user = db.relationship("User", backref="owner", uselist=False, lazy="select")

    def __repr__(self):
        return '<Owner %r>' % self.user_id
    
    def to_dict(self):
        return {}
    
class Pet(db.Model):
    __tablename__ = 'pet'
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer)
    pet_name = db.Column(db.String(30),unique=True, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('owner.id'), nullable=False)
    # owner = db.relationship("Owner")
    #specie = db.Column(db.String(10))
    #size = db.Column(db.String(10))
    #activity = db.Column(db.String(10))
    #sex = db.Column(db.String(10))
    #sterilized = db.Column(db.Boolean())
    #vaccinated = db.Column(db.Boolean())
    #dewormed = db.Column(db.Boolean())
    #personality = db.Column(db.String(150))
    

    def __repr__(self):
        return '<Pet %r>' % self.name
    
    def to_dict(self):
        return {}


class Buddy(db.Model):
    __tablename__ = 'buddy'
    #id = db.Column(db.Integer, )
    service = db.Column(db.String(30))
    user_id = db.Column(db.ForeignKey ('user.id'), primary_key=True)
    comment_id = db.Column(db.Integer, db.ForeignKey ('comment.id'))
    #other_skills = db.Column(db.String(100))
    #size_accepted = db.Column(db.String(10))

    def __repr__(self):
        return '<Buddy %r>' % self.user_id
    
    def to_dict(self):
        return {}


class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    comment_body= db.Column(db.Text)
    count_rating= db.Column(db.Integer)
    id_buddy = db.Column(db.Integer, db.ForeignKey ('buddy.id'))
    id_owner = db.Column(db.Integer, db.ForeignKey ('owner.id'))
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())

    def __repr__(self):
        return '<Comment %r>' % self.id

    def to_dict(self):
        return {}

class Reservation(db.Model):
    __tablename__ = 'reservation'
    id = db.Column(db.Integer, primary_key = True)
    id_buddy = db.Column(db.Integer, db.ForeignKey ('buddy.id'))
    id_owner = db.Column(db.Integer, db.ForeignKey ('owner.id'))
    reservation_date = db.Column(db.Datetime())
    reservation_service = db.Column(db.String(10))
    reservation_state = db.Column(db.String(10))
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())

    def __repr__(self):
        return '<Reservation %r>' % self.id

    def to_dict(self):
        return {}
