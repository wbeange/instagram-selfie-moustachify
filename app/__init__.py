import config
from flask import Flask
from instagram.client import InstagramAPI

unauthenticated_api = InstagramAPI(client_id=config.client_id, 
                                    client_secret=config.client_secret)

app = Flask(__name__) # create our flask app
from app import views
