const mongoose = require("mongoose")

const  connectToMongoDB = async() => {
  try {
     await mongoose.connect("mongodb://localhost:27017/mongooseDatabase");
     console.log("database is connected successfully")
  } catch (err) {
    console.log("error occured", err )
    console.log("Database is not connected, something went wrong")
  }
}

module.exports = {connectToMongoDB}