const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Personal_Details';
async function main() 
{
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('details');
// const insertResult = await collection.insertMany([{name: "bavleen" }, { age: 21 }, { gender: "female" }]);
//      console.log('Inserted documents =>', insertResult);

// const filteredDocs = await collection.find({ a: 1 }).toArray();
// console.log('Found documents filtered by { a: 1 } =>', filteredDocs);

// const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
// console.log('Updated documents =>', updateResult);

// const filteredDocs = await collection.find({}).toArray();
// console.log('Found documents filtered by {} =>', filteredDocs);

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


//   https://www.npmjs.com/package/mongodb