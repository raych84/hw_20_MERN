const express = require('express');
const bodyParser = require('body-parser');

// Creating App
const app = express();


// Import Routers & Controllers
const booksRouter = require('./routes/api/books');
const googleAPISearch = require('./contollers/googleController');


app.use(bodyParser.json());


// Define Routes
app.use('/api/books', booksRouter);
app.get('/api/search', googleAPISearch);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}



// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


module.exports = app;