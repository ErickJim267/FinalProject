from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp  
import shortuuid    

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
  
    # se corrigieron algunos campos
    id = db.Column(db.String(255), primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(20), nullable = False)
    last_name = db.Column(db.String(20), nullable = False)
    phone = db.Column(db.Integer, nullable = True)
    birth_date = db.Column(db.String(30), nullable = True)
    user_role = db.Column(db.String(10), nullable = False)
    is_active = db.Column(db.Boolean(), nullable=False)
    profile_photo = db.Column(db.String(100), nullable=True)
    about_me_short = db.Column(db.String(100), nullable=True)
    about_me_long = db.Column(db.Text, nullable=True)
    addresses = db.relationship('Address', backref = 'user', lazy = True)
    buddy = db.relationship('Buddy', backref = 'user', uselist=False)
    owner = db.relationship('Owner', backref = 'user', uselist=False)

    def __repr__(self):
        return '<User %r>' % self.name

    def check_password(self, password):
        return safe_str_cmp(password, self.password)

    def to_dict(self):
        # return { c.name: getattr(self, c.name) for c in self.__table__.columns }
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
            "about_me_long": self.about_me_long,
            "addresses": list(map(lambda location: location.to_dict(), self.addresses))
            #"buddy": list(map(lambda budd: budd.to_dict(), self.buddy))
            # "owner": list(map(lambda owne: owne.to_dict(), self.owner))
            # do not serialize the password, its a security breach
        }

class Address(db.Model):
    __tablename__ = 'address'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(255), db.ForeignKey ('user.id'), nullable=False)
    exact_address = db.Column(db.String(50), nullable=False)
    provincia = db.Column(db.String(15), nullable=False)
    canton = db.Column(db.String(15), nullable=False)
    distrito = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return '<Address %r>' % self.id
    
    def to_dict(self):
        return {
            "id": self.id,
            # "user_id": self.user_id,
            "exact_address": self.exact_address,
            "provincia": self.provincia,
            "canton": self.canton,
            "distrito": self.distrito
        }

class Owner(db.Model):
    __tablename__ = 'owner'
    # id = db.Column(db.String(255), primary_key = True)
    user_id = db.Column(db.String(255), db.ForeignKey ('user.id'), primary_key = True)
    pets = db.relationship('Pet', backref='owner', lazy = True)
    comments = db.relationship('Comment', backref = 'owner', lazy = True)
    reservations = db.relationship('Reservation', backref = 'owner', lazy = True)

    def __repr__(self):
        return '<Owner %r>' % self.user_id
    
    def to_dict(self):
        return {
            # "id": self.id,
            "user_id": self.user_id,
            "pets": list(map(lambda pet: pet.to_dict(), self.pets)),
            "comments": list(map(lambda comment: comment.to_dict(), self.comments)),
            "reservations": list(map(lambda reservation: reservation.to_dict(), self.reservations))
        }
    
class Pet(db.Model):
    __tablename__ = 'pet'
    id = db.Column(db.Integer, primary_key=True)
    pet_name = db.Column(db.String(30), nullable=False)
    owner_id = db.Column(db.String(255), db.ForeignKey('owner.user_id'), nullable=False)
    specie = db.Column(db.String(10))
    size = db.Column(db.String(10))
    activity = db.Column(db.String(10))
    sex = db.Column(db.String(10))
    sterilized = db.Column(db.Boolean())
    vaccinated = db.Column(db.Boolean())
    dewormed = db.Column(db.Boolean())
    personality = db.Column(db.String(150))
    
    def __repr__(self):
        return '<Pet %r>' % self.pet_name
    
    def to_dict(self):
        return {
            # "id": self.id,
            "pet_name": self.pet_name,
            # "owner_id": self.owner_id,
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
    # id = db.Column(db.String(255), primary_key=True)
    user_id = db.Column(db.String(255), db.ForeignKey ('user.id'), primary_key=True)
    service = db.Column(db.String(30), nullable=True)
    other_skills = db.Column(db.String(100), nullable=True)
    size_accepted = db.Column(db.String(10), nullable=True)
    comments = db.relationship('Comment', backref = 'buddy', lazy = True)
    reservations = db.relationship('Reservation', backref = 'buddy', lazy = True)

    def __repr__(self):
        return '<Buddy %r>' % self.user_id

    def to_dict(self):
        return {
            # "id": self.id,
            # "user_id": self.user_id,
            "service": self.service,
            "other_skills": self.other_skills,
            "size_accepted": self.size_accepted,
            "comments": list(map(lambda comment: comment.to_dict(), self.comments)),
            "reservations": list(map(lambda reservation: reservation.to_dict(), self.reservations))
        }
        
    def to_join_dict(self):
        return {
            "service": self.service,
            "other_skills": self.other_skills,
            "size_accepted": self.size_accepted
        }

class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    # id = db.Column(db.String(255), primary_key=True)
    comment_body= db.Column(db.Text)
    count_rating= db.Column(db.Integer)
    id_buddy = db.Column(db.String(255), db.ForeignKey ('buddy.user_id'))
    id_owner = db.Column(db.String(255), db.ForeignKey ('owner.user_id'))
    #un owner puede hacer varios comentarios, pero 1 comentario le pertenece a un mismo owner
    #un buddy tiene muchos comentarios, pero un buddy sólo le pertenece 1 comentario
    
    def __init__(self, comment_body, count_rating, id_buddy, id_owner):
        # self.id = shortuuid.uuid(),
        self.reservation_date = reservation_date,
        self.reservation_service = reservation_service,
        self.reservation_state = reservation_state,
        self.id_buddy = id_buddy,
        self.id_owner = id_owner

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
    id = db.Column(db.Integer, primary_key=True)
    # id = db.Column(db.String(255), primary_key = True)
    reservation_date = db.Column(db.String(20))
    reservation_service = db.Column(db.String(10))
    reservation_state = db.Column(db.String(10))
    id_buddy = db.Column(db.String(255), db.ForeignKey ('buddy.user_id'))
    id_owner = db.Column(db.String(255), db.ForeignKey ('owner.user_id'))
    #created_at = db.Column(db.DateTime, default=datetime.datetime.now())
    
    def __init__(self, id_buddy, id_owner, reservation_date, reservation_service, reservation_state):
        # self.id = shortuuid.uuid(),
        self.reservation_date = reservation_date,
        self.reservation_service = reservation_service,
        self.reservation_state = reservation_state,
        self.id_buddy = id_buddy,
        self.id_owner = id_owner

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