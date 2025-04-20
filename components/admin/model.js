const mongoose = require("mongoose");
const { scryptSync} = require("crypto"); // Import scryptSync for password hashing

// Import the database connection
const db = require("../../db");

// Define the admin schema
const adminSchema = new mongoose.Schema({
    username : String,
    password : String
});

// Create the Admin model based on the schema
const Admin = mongoose.model("Admin",adminSchema);

// Fetch admin by username
async function getAdmin(user){
    await db.connect();
    let result = await Admin.findOne({
        username : user
    });

    return(result)? result : false;
}

// Add a new admin
async function addAdmin(user,pass){
    await db.connect();
    let admin = await getAdmin(user);
    console.log(admin);
    if(!admin){
        let secret = process.env.SALT;
        let key = scryptSync(pass,secret,64);
        let newAdmin = new Admin({
            username : user,
            password: key.toString("base64")
        });
        let result = await newAdmin.save();
        if (result === newAdmin)
            return true;
        else  
            return false;
    } else{
        return false;
    }

}

// Authenticate admin credentials
async function authenticateAdmin(user, pass){
    await db.connect(); // Ensure database connection
    let secret = process.env.SALT; // Get salt from environment variables
    let key = scryptSync(pass, secret, 64); // Hash the provided password
    let result = await Admin.findOne({
        username: user,
        password: key.toString("base64")
    });
    return(result)? true: false;
}

// Export functions for use in other modules
module.exports = {
    getAdmin,
    addAdmin,
    authenticateAdmin
    
}
