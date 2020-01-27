const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const id = new ObjectID();
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to server')
    } 
    
    const db = client.db(databaseName);
    db.collection('users').findOne({ _id: new ObjectID("5e2df3025b81d72d34b677e6") }, (error, user) => {
        if(error) { return console.log("Unable to fetch")}

        console.log(user)
    })
})