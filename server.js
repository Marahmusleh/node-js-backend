const express = require("express"); //for building the Rest apis
const bodyParser = require("body-parser"); //helps to parse the request and create the req.body object
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions)); //create an Express app, then add body-parser and cors middlewares 

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./models");
// const Role = db.role;

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Drop and Resync Database with { force: true }');//The table for all models was just (re)created! , db.sequelize.sync() without force : true ,This creates the table if it doesn't exist (and does nothing if it already exists)
  // initial();
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to webstarts application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

