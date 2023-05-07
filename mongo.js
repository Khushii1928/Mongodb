const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'Student_Details';
async function run() {
const client = new MongoClient(url);
try {
await client.connect();
console.log('Connected correctly to server');
const db = client.db(dbname);
const collection = db.collection('Student');
await collection.insertOne({'name': 'Khushi', 'age': '21', 'homeCity':
'Jalandhar', 'phone': '9462677969'});
await collection.insertOne({'name': 'Bavleen', 'age': '21', 'homeCity':
'Kapurthala', 'phone': '8360805332'});
await collection.insertOne({'name': 'Riya', 'age': '22', 'homeCity':
'Amritsar', 'phone': '7087760704'});
const collection1 = db.collection('Student_Academic_Details');
await collection1.insertMany([{ 'StuID': '120131', 'Course': 'CSE', 
'Department': 'SCA', 'University': 'LPU'}, {'StuID': '821749', 'Course':
'BCOM', 'Department': 'Business', 'University': 'GNA'}, {'StuID': '72497', 
'Course': 'Plantology', 'Department': 'Agriculture', 'University': 'CU'}]);
const docs = await collection.find({}).toArray();
console.log('Reading documents from Student_Personal_Details: ');
console.log(docs);
const docs1 = await collection1.find({}).toArray();
console.log('Reading documents from Student_Academic_Details: ');
console.log(docs1);
client.close();
} catch (err) {
console.log(err.stack);
}
}
run();