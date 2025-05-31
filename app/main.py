from flask import Flask
from config import Config
from controllers.chat_controller import chat_bp
from controllers.auth_controller import auth_bp
from flask_jwt_extended import JWTManager


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    JWTManager(app)
    app.register_blueprint(auth_bp)
    app.register_blueprint(chat_bp)


    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=Config.DEBUG)
