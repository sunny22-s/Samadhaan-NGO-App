const express = require("express"); // provides a set of tools and features that simplify the process of building web applications and APIs (Routing,Middleware, Req and Resp,Static File Serving)
const morgan = require("morgan"); // logging package for development purposes
const cors = require("cors"); // allows for cross-origin resource sharing (CORS) in the server
const bodyParser = require("body-parser");
const dotenv=require('dotenv')
dotenv.config({path: './config.env'});;

const port = process.env.PORT;
const app = express();

const donateRoute = require('./Routes/donateRoute')
const donateTrackRoute = require('./Routes/trackRoute')

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/donate', donateRoute);
app.use('/track', donateTrackRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/tracker", (req, res) => {
  res.sendFile(__dirname + "/public/tracker.html");
});

app.get("/getDetails", (req, res) => {
  res.sendFile(__dirname + "/public/details.html");
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
});

app.get("/failure", (req, res) => {
  res.sendFile(__dirname + "/public/failure.html");
});

// Handling errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const hostIP = "0.0.0.0";
app.listen(port, hostIP, () => {
  console.log(`Server has started at http://${hostIP}:${port}`);
})


module.exports = app;