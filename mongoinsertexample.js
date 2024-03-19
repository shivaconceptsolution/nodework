const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'mynewdb';
const collectionName = 'stu';
async function insertRecord()
{
    const client = new MongoClient(uri);
    try
    {
        await client.connect();  //connect to mongo db server
        const db = client.db(dbName); // connect to mongo db database
        const collection = db.collection(collectionName); // connect to mongo db collection
const result = await collection.insertOne({rno:1002,"name":"stu2"
,branch:"IT","fees":65000});
        console.log('Inserted document id:', result.insertedId);
    }
    catch(err)
    {
        console.error('Error inserting data:', err);
    }
    finally
    {
        client.close();
    }
}

insertRecord();