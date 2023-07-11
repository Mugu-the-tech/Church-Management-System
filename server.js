//const mongoString ="mongodb+srv://mugugithuku:%40%23Ellichept1@cluster0.qdjz3zn.mongodb.net/?retryWrites=true&w=majority";
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const passport = require('passport');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require("bcrypt");
const initializePassport = require("./passport.config");
const flash = require("express-flash");
const session = require("express-session");
const { isDate } = require("util/types");
debugger;
initializePassport(
  passport,
  async email => await User.findOne({ email }),
  async phone => await User.findOne({ phoneNumber: phone })
);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// Connect to MongoDB Atlas and specify the database name
mongoose.connect('mongodb+srv://mugugithuku:%40%23Ellichept1@cluster0.qdjz3zn.mongodb.net/finalproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB Atlas.");
  })
  .catch(error => {
    console.error("Failed to connect to MongoDB Atlas:", error);
  });

// Define a Mongoose schema for the "users" collection
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email:{type:String, required:true, unique:true},
  password: String,
  phone:Number,
});

const User = mongoose.model('User', userSchema);
//moongoose  schema for registration
const EventsSchema = new mongoose.Schema({
  eventtitle:String,
  eventsubtitle:String,
  datestart:String,
  dateend:String
})
const Event = mongoose.model('Event',EventsSchema);
// Register functionality
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      
    });

    await newUser.save();
    console.log('User registered successfully:', newUser);
    res.redirect("/login");
  } catch (error) {
    console.error('Error registering user:', error);
    res.redirect("/register");
  }
});

// Login functionality
app.post("/login", passport.authenticate("local", {
  successRedirect: "/admin",
  failureRedirect: "/login",
  failureFlash: true
}));

// Here we expose the views so they can be rendered
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the root folder
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/admin', (request, response, next) => {
  response.render("admin.ejs");
});

app.get('/login', (request, response, next) => {
  response.render("login.ejs");
});

app.get('/register', (request, response, next) => {
  response.render("register.ejs");
});

app.get('/events-registration',(req,res,next)=> {
  res.render("events-registration.ejs");
})
// End of routes

const port = 5501; // Set the desired port number
const host = '0.0.0.0'; // Set the desired host address or use 'localhost' if applicable

app.listen(port, host, () => {
  console.log(`Application started and listening on http://${host}:${port}/`);
});

app.post('/events', async(req,res)=>{
try{
const newEvent = new Event({
  eventtitle: req.body.eventtitle,
  eventsubtitle: req.body.eventsubtitle,
  datestart: req.body.datestart,
  dateend: req.body.dateend
});
await newEvent.save();
console.log('Event Updated Successfully:', newEvent)
req.flash("success", "Event registered successfully.");
res.redirect("/events-registration")
}  catch (error) {
  console.error('Error registering event:', error);
  res.redirect("/events-registration");
}
})
