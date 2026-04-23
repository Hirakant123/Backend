const express = require("express")

//we are exporting the fs module that will help us to perform
//  the certain operation such as readFile writeFile
const fs = require("fs")
const { json } = require("stream/consumers")
const app = express()
app.use(express.json())


const teachersRoute = require("./ExpressRoutes/teachers")  // importing from teachers.js
const studentRoute = require("./ExpressRoutes/students")


app.use("/teachers", teachersRoute)
app.use("/students", studentRoute)



app.listen(5000, () => {
    console.log("server is running at http://localhost:5000")
})




