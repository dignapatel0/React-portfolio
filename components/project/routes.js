const express = require("express");
const router = express.Router();

// Import controller functions
const { 
    listProject,
    showAddForm, 
    addNewProject, 
    deleteProjectById,
    getProjectAPI
} = require("./controller");

// Display the list of projects
router.get("/list", listProject);

// Show the form for adding a new project
router.get("/add", showAddForm);

// Handle project submission
router.post("/add/submit", addNewProject);

// Delete a project by ID
router.get("/delete/submit", deleteProjectById);

// Get Project API
router.get("/api/list", getProjectAPI);

// Export the router for use in the application
module.exports = router;