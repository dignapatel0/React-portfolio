const mongoose = require("mongoose");

// Import database connection
const db = require("../../db");

// Define schema for Experience collection
const ExperienceSchema = new mongoose.Schema(
    {
        title: String,
        company: String,
        location: String,
        startYear: Number,
        endYear: Number,
        description: String

    }
);

// Create model for Experience collection
const Experience = mongoose.model("Experience", ExperienceSchema);

// Seed database with initial experience data if empty
async function initializeExperience(){
    const experienceData = [
        {
            title: "Senior Operation Officer",
            company: "VFS Global Service Pvt. Ltd.",
            location: "Ahmedabad, Gujarat, India",
            startYear: 2019,
            endYear: 2023,
            description: "Oversaw operations and ensured efficient processing of visa applications, coordinated with various stakeholders, and provided training to new staff."

        },
        {
            title: "Office Administrator",
            company: "ICC Immigration Inc.",
            location: "Mississauga, ON, Canada",
            startYear: 2023,
            endYear: 2025,
            description: "Managed office operations, assisted clients with immigration inquiries, maintained records, and supported the team in daily administrative tasks."

        }
    ];

    await Experience.insertMany(experienceData);

}

// Fetch all experience records
async function getExperience(){
    await db.connect();
    return await Experience.find({});
}

// Add a new experience entry
async function addExperience(title,company,location,startYear,endYear,description){
    await db.connect();
    let newExperience = new Experience({
        title: title,
        company: company,
        location: location,
        startYear: startYear,
        endYear: endYear,
        description: description
    });

    let result = await newExperience.save();
    console.log(result);
}

// Remove an experience by ID
async function deleteExperience(id){
    await db.connect();
    let result = await Experience.deleteOne({_id : id});
    console.log(result);
}

// Export functions
module.exports = {
    initializeExperience,
    getExperience,
    addExperience,
    deleteExperience
}