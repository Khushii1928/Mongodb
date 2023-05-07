const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
const dbname = 'Teacher_Details';

async function run() {


  try {
    await client.connect();

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection('Teacher_Personal_Details');

    await collection.insertOne({'name': 'preet', 'age': '22', 'City': 'jalandhar', 'phone': '9462677969'});
    await collection.insertOne({'name': 'inderjit', 'age': '23', 'City': 'mumbai', 'phone': '8360805332'});
    await collection.insertOne({'name': 'ravi', 'age': '24', 'City': 'patna', 'phone': '7087760704'});


    const collection1 = db.collection('Teacher_Professional_Details');

    await collection1.insertMany([
    {'TeacherID':'120116', 'Department': 'Computer Applications', 'Designation': 'Teacher', 'office': 'jalandhar'},
    {'TeacherID':'120557', 'Department': 'Business', 'Designation': 'Professor', 'office': 'ludhiana'}, 
    {'TeacherID':'117249', 'Department': 'Agriculture', 'Designation': 'HOD', 'office': 'Phagwara'}]);


    const docs = await collection.find({}).toArray();
    console.log('Reading documents from Teacher_Personal_Details: ');
    console.log(docs);


    const docs1 = await collection1.find({}).toArray();
    console.log('Reading documents from Teacher_Professional_Details: ');
    console.log(docs1);

    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

run();