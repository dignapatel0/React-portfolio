const adminModel = require("./model");

// Render the login form
const loginForm = async(request,response) => {
    response.render("admin/login");
}

// Handle login authentication
const login = async(request,response) => {

    // Authenticate the admin user
    let auth = await adminModel.authenticateAdmin(request.body.user,request.body.pass);
    console.log(`authorization: ${auth}`);
    if(auth){
        request.session.loggedIn = true;
        request.session.user = request.body.user;
        response.redirect("/"); // After successful login redirect to the index.pug page
    }
    else{
        response.render("admin/login",{err:" Admin not found"});
    }
}

// Handle logout functionality
const logout = async(request,response) => {
    request.session.destroy();
    response.redirect("/");
}

// Render the registration form
const registerForm = async(request,response) =>{
    await response.render("admin/register");
}

// Handle admin registration
const register = async(request,response) => {

    // Attempt to add a new admin
    let result = await adminModel.addAdmin(request.body.user,request.body.pass);
    console.log(`result: ${result}`);
    if(result){
        response.redirect("/admin/login"); // Redirect to login page after successful registration
    }
    else{
        response.render("admin/register",{err: "Username already exists"});
    }
}

// Render admin page or redirect to login if not authenticated
const adminPage = async(request,response) => {
    console.log(request.session);
    if(request.session.loggedIn){
        response.render("index",{username:request.session.user}); // Render index page with username if logged in
    }
    else{
        response.redirect("/admin/login"); 
    }

}

module.exports = {
    loginForm,
    login,
    logout,
    registerForm,
    register,
    adminPage
}
