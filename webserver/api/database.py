from sqlalchemy import create_engine, Table, MetaData, Column, text, String
import urllib.parse
#import pandas as pd


class Database:
    # class variables
    params = urllib.parse.quote_plus("Driver={ODBC Driver 18 for SQL Server};Server=tcp:smartcoderhome.database.windows.net,1433;Database=SmartCoderdb;Uid=CloudSA73cf2c29;Pwd={Rockbottom@95};Encrypt=yes;TrustServerCertificate=yes;Connection Timeout=30;")
    metadata = MetaData()
    conn_str = 'mssql+pyodbc:///?odbc_connect={}'.format(params)
    engine_azure = create_engine(conn_str,echo=True)
    metadata.create_all(engine_azure)
    
    def __init__(self):
        self.user_table = Table(
                        "users",
                        self.metadata,
                        Column('firstname', String(255)),
                        Column('lastname', String(255)),
                        Column('email', String(255)),
                        Column('username', String(255)),
                        Column('password', String(255))
                    )

    def __str__(self, table):
        data = self.get_data(table)
        for row in data:
            return f"{row.firstname} {row.lastname}' {row.email} {row.username} {row.password}"
    
    def connect(self):
        connection = self.engine_azure.connect()
        return connection
        
    def insert_data(self, data):
        connection = self.connect()
        connection.begin()
        connection.execute(self.user_table.insert(), {"firstname": str(data.firstname), "lastname": str(data.lastname), "email": str(data.email), "username": str(data.username), "password": str(data.password)})
        connection.commit()

    def get_data(self, table):
        connection = self.connect()
        query = "SELECT * FROM {}"
        result = connection.execute(text(query.format(table)))
        connection.commit()
        return result


db = Database()
db.get_data("USERS")