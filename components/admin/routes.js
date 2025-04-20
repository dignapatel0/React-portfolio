const express = require("express");
const router = express.Router();

// Import controller functions
const {
    loginForm, 
    login, 
    logout, 
    registerForm, 
    register,
    adminPage
} = require("./controller");

// Define routes for the admin functionality

// Route to render the login form
router.get("/login", loginForm); 

// Route to handle login authentication
router.post("/login", login);

// Route to handle user logout
router.get("/logout", logout);

// Route to render the registration form
router.get("/register", registerForm);

// Route to handle admin registration
router.post("/register", register);

// Route to display the admin page or redirect to login
router.get("/", adminPage);

// Export the router for use in the application
module.exports = router;