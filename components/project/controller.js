const projectModel = require("./model");

// Fetch and display all projects
const listProject = async(request,response) => {
    let projectData = await projectModel.getProject();
    if(!projectData.length){
        await projectModel.initializeProject();
        projectData = projectModel.getProject();
    }
    response.render("projects/list",{project : projectData});
};

// Render the add project form
const showAddForm = async(request,response) => {
    response.render("projects/add");
}; 

// Handle form submission to add project
const addNewProject = async(request,response) =>{
    let result = await projectModel.addProject(
        request.body.name,
        request.body.summary,
        request.body.technology,
        request.body.status,
        request.body.timespan
    );
    
    response.redirect("../list"); //we are on projects/add/submit so to go back to list
};

// Remove projects by ID
const deleteProjectById = async(request,response) =>{
    let id = request.query.projId;
    await projectModel.deleteProject(id);
    console.log(id);
    response.redirect("../list");
};

// Get Project API
const getProjectAPI = async(request,response) => {
    let projectList = await projectModel.getProject();
    response.json(projectList);
}

// Export functions
module.exports = {
    listProject,
    showAddForm,
    addNewProject,
    deleteProjectById,
    getProjectAPI
}