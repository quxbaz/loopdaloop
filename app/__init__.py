import flask
from flask import Flask, request
import conf
import db
import models
import api

# Creating the app
app = Flask(__name__)
app.config.from_object(conf)

# Blueprints
app.register_blueprint(api.blueprint)
