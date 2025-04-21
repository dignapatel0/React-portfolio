// import the modules/packages by using require
const express = require("express");
const path = require("path");
const sessions = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// initializing the express environment
const app = express(); //

// Allow frontend at port 5173 to access this API
const allowedOrigins = [
    'http://localhost:5173',
    'https://react-portfolio-digna-patel.vercel.app',
  ];
  
  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));
  
// using 8888 port
const port = process.env.PORT || "8888";

// Set the directory for views and specify Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware to parse form data (URL-encoded) and JSON data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, JS, images) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Configure session settings
app.use(sessions({
    secret: process.env.SESSIONSECRET,
    name: "MyUniqueSessionId",
    saveUninitialized: false,
    resave: false,
    cookie: {}
}));

// Mount route handlers
app.use("/admin", require("./components/admin/routes"));
app.use("/experiences", require("./components/experience/routes"));
app.use("/projects", require("./components/project/routes"));

// Home route
app.get("/", async (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
        res.render("index", { username: req.session.user });
    } else {
        res.redirect("/admin/login");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
