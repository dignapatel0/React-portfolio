const mongoose = require("mongoose");

// Connection string for MongoDB
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DBNAME}`;

// Async function to connect to the database
async function connect(){
    await mongoose.connect(dbUrl);
}

// Export connect function
module.exports = {
    connect
};