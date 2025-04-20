const express = require("express");
const router = express.Router();

// Import controller functions
const { 
    listExperience,
    showAddForm,
    addNewExperience,
    deleteExperienceById,
    getExperienceAPI 
} = require("./controller");

// Display the list of experiences
router.get("/list", listExperience);

// Show the form to add a new experience
router.get("/add", showAddForm);

// Handle adding a new experience
router.post("/add/submit",addNewExperience);

// Delete an experience by ID
router.get("/delete/submit", deleteExperienceById);

//Get Experience API
router.get("/api/list", getExperienceAPI);

// Export the router for use in the application
module.exports = router;