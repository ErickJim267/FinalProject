from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp 

db = SQLAlchemy()

class Owner(db.Model):
    __tablename__ = "owner"
    id = db.Column(db.Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey ('user.id'))
    id_pet = db.Column(db.Integer, autoincrement = True)
    user = relationship("User")

class Buddy(db.Model):
    __tablename__ = "buddy"
    id = db.Column(db.Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey ('user.id'))
    service = db.Column(db.String(30))
    user = relationship("User")

class Address(db.Model):
    __tablename__ = "address"
    id = db.Column(db.Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey ('user.id'))
    id_comment = db.Column(db.String(200))

class Comment(db.Model):
    __tablename__ = "comment"
    id = db.Column(db.Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey ('user.id'))
    comment_body= db.Column(db.String(200))

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_name = db.Column(db.String(50), unique = True, nullable = False)
    name = db.Column(db.String(20), unique = False, nullable = False)
    last_name = db.Column(db.String(20), unique = False, nullable = False)
    id_adress = db.Column(db.String(30), unique = False, nullable = False)
    phone = db.Column(db.Integer, unique = True, nullable = False)
    birth_date = db.Column(db.Date, unique = False, nullable = False)
    user_rol = db.Column(db.Integer, unique = False, nullable = False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        