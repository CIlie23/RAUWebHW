#frontend
from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note
from . import db
import json

views = Blueprint('views', __name__) #name it views cause is simple

@views.route('/', methods=['GET', 'POST']) #what is in home will run
@login_required #now we cannon access this page if we aren't logged in

def home():
   #2:03:00
    #return "<h1>test</h1>" #register in init
   if request.method == 'POST':
      note = request.form.get('note')
       
      if len(note) < 1:
         flash('Nota e prea mica', category='error')
      else:
         new_note = Note(data=note, user_id=current_user.id)
         db.session.add(new_note)
         db.session.commit()
         flash('Nota adaugata', category='success')
    
   return render_template("home.html", user=current_user) #user=current_user check if user is authenticated

@views.route('/delete-note', methods=['POST'])
def delete_note():  
    note = json.loads(request.data) # this function expects a JSON from the INDEX.js file 
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()

    return jsonify({})
         