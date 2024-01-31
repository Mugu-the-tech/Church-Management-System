const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connection to my database
const mongoString ="mongodb+srv://mugugithuku:%40%23Ellichept1@cluster0.qdjz3zn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
});

const port = 5500; // Set the desired port number


app.listen(port, '127.0.0.1', () => {
  console.log(`Application started and listening on http://127.0.0.1:${port}/`);
});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(__dirname + '/src', +'Images'));

app.get('/', (request, response, next) => {
  response.render( "index.ejs");
});
app.get('/login', (request, response, next) => {
  response.render( "login.ejs");
});
app.get('/register', (request, response, next) => {
  response.render( "register.ejs");
});
/* Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    db = client.db("finalproject");
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);

app.post('/', async (request, response) => {
  try {
    const formdata = request.body;
    const collection = db.collection('events');

    await collection.insertOne(formdata);
    console.log('Data inserted');

    // Send a response to indicate successful data insertion
    response.status(200).send('Data inserted into MongoDB');
  } catch (error) {
    console.log('Error inserting data:', error);
    response.status(500).send('Internal server error');
  }
});
*/
