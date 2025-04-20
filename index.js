// import the modules/packages by using require
const express = require("express");
const path = require("path");
const sessions = require("express-session");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// initializing the express environment
const app = express();

// using 8888 port
const port = process.env.PORT || "8888";

// Set the directory for views and specify Pug as the template engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

// Middleware to parse form data (URL-encoded) and JSON data 
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// Serve static files (CSS, JS, images) from the "public" folder
app.use(express.static(path.join(__dirname,"public")));

// Configure session settings for user authentication and session management
app.use(sessions({
    secret: process.env.SESSIONSECRET, // Secret key for encrypting sessions
    name: "MyUniqueSessionId", // Custom session name
    saveUninitialized: false, // Do not save session until modified
    resave: false, // Prevents resaving an unchanged session
    cookie: {} // Default cookie settings
}));

// Mount route handlers for different sections of the app
app.use("/admin",require("./components/admin/routes"));
app.use("/experiences", require("./components/experience/routes"));
app.use("/projects", require("./components/project/routes"));

// Route to render the homepage
app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
});



app.get("/", async(req, res) => {
    console.log(req.session);
    if(req.session.loggedIn){
        res.render("index", {username: req.session.user});
    }else{
        res.redirect("/admin/login");
    }
});