const experienceModel = require("./model");

// Fetch and display all experiences
const listExperience = async(request,response) => {

    let experienceData = await experienceModel.getExperience();

    if(!experienceData.length){
        await experienceModel.initializeExperience();
        experienceData = experienceModel.getExperience();
    }

    response.render("experiences/list", {experience : experienceData});
};

// Render the add experience form
const showAddForm = async(request,response) => {
    response.render("experiences/add", );
}

// Handle form submission to add experience
const addNewExperience = async(request,response) => {

    let result = await experienceModel.addExperience(request.body.title,
        request.body.company,
        request.body.location,
        request.body.startYear,
        request.body.endYear,
        request.body.description);
    
    response.redirect("../list"); //we are on projects/add/submit so to go back to list
}

// Remove experience by ID
const deleteExperienceById = async(request,response) => {
    let id = request.query.expId;
    await experienceModel.deleteExperience(id);
    console.log(id);
    response.redirect("../list");
}

// Get Experience API
const getExperienceAPI = async(request,response) => {
    let experientList = await experienceModel.getExperience();
    response.json(experientList);
}

// Export functions
module.exports = {
    listExperience,
    showAddForm,
    addNewExperience,
    deleteExperienceById,
    getExperienceAPI
};