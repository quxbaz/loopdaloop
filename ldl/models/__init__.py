from uuid import uuid4
from sqlalchemy import Column, String
from ldl.db import Base

def uniq_id():
  return str(uuid4())

# class MyModel(Base):
#   __tablename__ = 'entry'
#   id = Column(String, primary_key=True)
#   def __init__(self):
#     self.id = uniq_id()
#   @property
#   def serialized(self):
#     return {
#       'id'   : self.id
#     }
#   def __repr__(self):
#     return '<MyModel id="{0}">'.format(self.id)
