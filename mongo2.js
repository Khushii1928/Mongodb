const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Employees_Personal_Details';
async function main() 
{
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Details2');
const insertResult = await collection.insertMany
([{employee_id:21, address:"ABC", work_experience:1, State:"Punjab"},
{employee_id:31, address:"DEF", work_experience:5, State:"Sikkim"},
{employee_id:41,  address:"GHI", work_experience:10,State:"Manipur"},
{employee_id:51,  address:"JKL", work_experience:13,State:"Goa"}]);
     console.log('Inserted documents =>', insertResult)

const filteredDocs = await collection.find({work_experience:{$eq:1}}).toArray();
console.log('Found documents filtered by {} =>', filteredDocs);


  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


//   https://www.npmjs.com/package/mongodb