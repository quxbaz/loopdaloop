from flask import Blueprint, request, render_template
from flask.ext.restful import Api, Resource
from ldl import models
from ldl import db

blueprint = Blueprint(__name__, __name__)
rest = Api(blueprint)

@blueprint.route('/')
def app():
  return render_template('home.html')
