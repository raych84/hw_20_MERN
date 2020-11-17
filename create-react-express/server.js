// Require Node Modules
const path = require("path");

// Require NPM Packages
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({ path: './config.env' });

// Require Custom Modules
const app = require('./app.js');

// Define Enviornment Variables
const PORT = process.env.PORT || 3001;



app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(() => console.log('database connection successful 👍🏽'))
  .catch(err => console.log(err));
