const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const userModel = require('./components/user')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDb"))   //connect mongodb
  .catch(err => console.log("Failed to Connect To MongoDb", err))

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on ${process.env.PORT}`)
})


// sign up hash password 
app.post('/signup', (req, res) => {
  const { name, email } = req.body;

  userModel.findOne({ $or: [{ name }, { email }] })
    .then(existingUser => {
      if (existingUser) {
        return res.json("Name or Email already exists");
      }

      userModel.create(req.body)
        .then(user => res.json("Signup Success"))
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
});

app.post('/signin', (req, res) => {
  const { name, password } = req.body;
  userModel.findOne({ name })
    .then(user => {
    if (!user) {
      return res.json("Account Not Found ,Please SignUp.");
    }
    if (user.password !== password) {
      return res.json("Incorrect Password");
    }
    res.json("Success");
  })
  .catch(err=>res.json("Something Went Wrong"));
});






