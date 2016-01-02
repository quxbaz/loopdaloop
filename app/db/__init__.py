import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app import conf

engine = sqlalchemy.create_engine(conf.SQLALCHEMY_DATABASE_URI)
Base = declarative_base()
meta = Base.metadata
session = sessionmaker(bind=engine)()

from app.models import *
