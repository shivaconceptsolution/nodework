const { MongoClient } = require('mongodb');

// Replace the following with your actual MongoDB connection string
const uri = 'mongodb://localhost:27017';
const dbName = 'mynewdb';
const collectionName = 'stu';
async function selectData() {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Insert a single document
      var result = await collection.find().toArray();
      for(var r of result)
      {
          console.log(r.rno + "," + r.name + " "+r.branch + " " +r.fees);
      }
     // console.log('Inserted document id:', result.insertedId);
    } catch (err) {
      console.error('Error inserting data:', err);
    } finally {
      client.close();
    }
  }
  
  // Call the insertData function to perform the insertion
  selectData(); 