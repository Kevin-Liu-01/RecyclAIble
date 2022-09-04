from flask import Flask, request, jsonify
from flask_ngrok import run_with_ngrok
from flask_cors import CORS
from pyngrok import ngrok
import sqlite3
import base64
import datetime
import json
from model import get_pred, m
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['CORS_HEADERS']='Content-Type'
CORS(app, expose_headers='Authorization')
run_with_ngrok(app)
app.debug=True

def savenow(pred):
  conn = sqlite3.connect("TrashDB.db")
  cursor = conn.cursor()
  if pred.lower() == 'recycle':
    cursor.execute(f"INSERT INTO trash VALUES(NULL, 'yes')")
  elif pred.lower() == 'trash':
    cursor.execute(f"INSERT INTO trash VALUES(NULL, 'no')")
  conn.commit()
  conn.close()

@app.route("/test", methods = ['GET', 'POST'])
def recieve():
  data = request.get_json()

  data = data['base64']
  data = data[2:-1]

  with open("data.txt", "w") as fh:
    fh.write(str(data))

  with open('data.txt') as f:
    string = f.read()

  string_bytes = bytes(string, 'utf-8')

  with open(f"img_1.jpg", "wb") as fh:
    fh.write(base64.decodebytes(string_bytes))

  pred = get_pred(m, 'img_1.jpg')

  savenow(pred)

  return(pred)

@app.route("/sendUIdata", methods=["GET"])
def ui():

  conn = sqlite3.connect("TrashDB.db")
  cursor = conn.cursor()
  cursor.execute
  cursor.execute("SELECT * FROM trash")
  data = cursor.fetchall()
  new_data = jsonify(data)
  new_data.headers['Access-Control-Allow-Origin'] = '*'
  new_data.headers['ngrok-skip-browser-warning'] = '*'
  conn.close()
  return new_data




if __name__ == "main":
  app.run()