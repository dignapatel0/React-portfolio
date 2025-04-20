const mongoose = require("mongoose");

// Import database connection
const db = require("../../db");

// Define schema for project collection
const ProjectSchema = new mongoose.Schema(
    {
        name: String,
        summary: String,
        technology: String,
        status: String,
        timespan: String
    }
);

// Create model for project collection
const Project = mongoose.model("Project", ProjectSchema);

// Seed database with initial project data if empty
async function initializeProject(){
    const projectData = [
        {
            name: "Fun Popcorn Poppers",
            status: "In Progress",
            timespan: "Jan 2025 - Present",
            technology: "HTML, CSS, JavaScript",
            summary: "A fun and engaging game where players pop popcorn to earn points, featuring dynamic animations and a scoring system."
        },
        {
            name: "G1 Quiz App",
            status: "Completed",
            timespan: "Oct 2024 - Dec 2024",
            technology: "HTML, CSS, JavaScript",
            summary: "A quiz application to help users prepare for the Ontario G1 driving test, featuring multiple-choice questions with instant feedback."
        }
    ];
    await Project.insertMany(projectData);
}

// Fetch all project records
async function getProject(){
    await db.connect();
    return await Project.find({});
}

// Add a new project entry
async function addProject(name,summary,technology,status,timespan){
    await db.connect();
    let newProject = new Project({
        name: name,
        summary: summary,
        technology: technology,
        status: status,
        timespan: timespan
    });

    return await newProject.save();
}

// Remove a project by ID
async function deleteProject(id){
    await db.connect();
    let result = await Project.deleteOne({_id : id});
    console.log(result);
}

// Export functions
module.exports = {
    initializeProject,
    getProject,
    addProject,
    deleteProject

}
