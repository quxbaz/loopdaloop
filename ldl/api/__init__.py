from flask import Blueprint, request, render_template
from flask.ext.restful import Api, Resource
from ldl import models
from ldl import db

blueprint = Blueprint(__name__, __name__)
rest = Api(blueprint)

@blueprint.route('/')
def app():
  return render_template('home.html')

class Comments(Resource):
  def get(self):
    return [
      {'id': 1, 'author': "Pete Hunt", 'text': "This is one comment"},
      {'id': 2, 'author': "Shabba Doo", 'text': "This is *another* comment"}
    ]

rest.add_resource(Comments, '/api/comments')
