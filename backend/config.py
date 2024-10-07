from pymongo import MongoClient

client = MongoClient("mongodb+srv://vaibhavpuri:manipuri@cluster0.enagd.mongodb.net/")
db = client['LiveStream']  
overlays_collection = db['overlays']  
