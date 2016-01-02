import json, uuid
from flask import Blueprint, request, render_template
from flask.ext.restful import Api, Resource
from app import models
from app import db

blueprint = Blueprint(__name__, __name__)
rest = Api(blueprint)

@blueprint.route('/')
def app():
  return render_template('home.html')

# rest.add_resource(Comments, '/api/comments')
