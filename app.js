//  Import Packages
require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")



// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"))



// Use extensions
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



// Use routes
app.use("/", require("./routes/User"))



// App listening
const port = process.env.PORT || 4001
app.listen(port, () => {
    console.log(`Listening port ${port}`);
})