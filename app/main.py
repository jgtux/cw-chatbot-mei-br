from flask import Flask
from config import Config
from controllers.chat_controller import chat_bp
from controllers.auth_controller import auth_bp
from flask_jwt_extended import JWTManager
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config['JWT_SECRET_KEY'] = 'your-secret-key'
    app.config['JWT_TOKEN_LOCATION'] = ['cookies']            # <- use cookies for JWT
    app.config['JWT_ACCESS_COOKIE_PATH'] = '/'                # path for cookie
    app.config['JWT_COOKIE_CSRF_PROTECT'] = False             # or True with CSRF handling
    app.config['JWT_COOKIE_SECURE'] = False
    CORS(app, origins=["http://localhost:3449"], supports_credentials=True)
    app.config.from_object(Config)
    JWTManager(app)
    app.register_blueprint(auth_bp)
    app.register_blueprint(chat_bp)


    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=Config.DEBUG)
