from flask import jsonify, url_for
import shortuuid
from api.models import db, User, Owner, Buddy

class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

def generate_sitemap(app):
    links = ['/admin/']
    for rule in app.url_map.iter_rules():
        # Filter out rules we can't navigate to in a browser
        # and rules that require parameters
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            if "/admin/" not in url:
                links.append(url)

    links_html = "".join(["<li><a href='" + y + "'>" + y + "</a></li>" for y in links])
    return """
        <div style="text-align: center;">
        <img style="max-height: 80px" src='https://github.com/4GeeksAcademy/react-flask-hello/blob/4677c732f09717c85156fbd71c147f0d98fcac6f/docs/assets/rigo-baby.jpg?raw=true' />
        <h1>Rigo welcomes you to your API!!</h1>
        <p>API HOST: <script>document.write('<input style="padding: 5px; width: 300px" type="text" value="'+window.location.href+'" />');</script></p>
        <p>Start working on your proyect by following the <a href="https://start.4geeksacademy.com/starters/full-stack" target="_blank">Quick Start</a></p>
        <p>Remember to specify a real endpoint path like: </p>
        <ul style="text-align: left;">"""+links_html+"</ul></div>"
        
def load_users():
    users = [
        {"email":"jcarrillo@gmail.com", "password":"1234", "name":"jose", "last_name":"carrillo", "user_role":"buddy", "is_active":True},
        {"email":"ejimenez@gmail.com", "password":"1234", "name":"erick", "last_name":"jimenez", "user_role":"owner", "is_active":True},
        {"email":"jvillalobos@gmail.com", "password":"1234", "name":"julio", "last_name":"villalobos", "user_role":"owner", "is_active":True},
        {"email":"harista@gmail.com", "password":"1234", "name":"hazel", "last_name":"arista", "user_role":"buddy", "is_active":True}
    ]

    for user in users:
        my_user = User.query.filter_by(email=user['email']).first()
        _id=shortuuid.uuid()
        if my_user is None:
            new_user = User()
            new_user.id = _id
            new_user.email = user['email']
            new_user.password = user['password']
            new_user.name = user['name']
            new_user.last_name = user['last_name']
            new_user.user_role = user['user_role']
            new_user.is_active = user['is_active']
            db.session.add(new_user)
            db.session.commit()
            
            if user['user_role'] == 'owner':
                new_owner = Owner(id=shortuuid.uuid(), user_id=_id)    
                db.session.add(new_owner)
                db.session.commit()
            else:
                new_buddy = Buddy(id=shortuuid.uuid(), user_id=_id)    
                db.session.add(new_buddy)
                db.session.commit()