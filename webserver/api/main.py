#import os
import urllib.parse
from flask import Flask, json, request
from flask_cors import CORS
#from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Table, MetaData, Column, text, String
#import pandas as pd
import database

#params = urllib.parse.quote_plus("Driver={ODBC Driver 18 for SQL Server};Server=tcp:smartcoderhome.database.windows.net,1433;Database=SmartCoderdb;Uid=CloudSA73cf2c29;Pwd={Rockbottom@95};Encrypt=yes;TrustServerCertificate=yes;Connection Timeout=30;")

# initialization
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'supersecret'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc:///?odbc_connect={}'.format(params)
#app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
#metadata = MetaData()
#conn_str = 'mssql+pyodbc:///?odbc_connect={}'.format(params)
#engine_azure = create_engine(conn_str,echo=True)
#metadata.create_all(engine_azure)
#db = SQLAlchemy(app)
'''
# Create model
class Database(db.Model):
    firstName = db.Column(db.String, nullable=False)
    lastName = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False, primary_key=True)
    password = db.Column(db.String, nullable=False)

    # get a string representation of the model
    def __str__(self):
        with app.app_context():
            return f'{self.firstName} {self.lastName} {self.email} {self.username} {self.password}'


'''

@app.route('/Register/posts', methods=['POST'])
def posts():
    print("Connecting with the database to add user")
    request_data = json.loads(request.data)
    print("This is the request data: ", request_data)
    data = database.Database()
    data.insert_data(request_data)
    '''
    
    data = Database(
        firstName=request_data["firstname"], 
        lastName=request_data["lastname"],
        email=request_data["email"],
        username=request_data["username"],
        password=request_data["password"]
    )

    # add the information in the datbase and commit
    print("Adding data to database")
    #print("db: ", db)
    #db.session.add(data)
    try:
        print("Commiting the change...")
        db.session.commit()
        print("201: Submission was successful! Information entered in the database.")
    except Exception as e:
    #log your exception in the way you want -> log to file, log as error with default logging, send by email. It's upon you
        db.session.rollback()
        db.session.flush() # for resetting non-commited .add()
        print("401: Submission was not successful!")

    
    print(str(data))
    '''
    return {"201": "Submission successful! Information entered in the database."}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5050)
    #db = Database()
    #print(str(db))
    
    
