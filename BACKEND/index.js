const express = require("express")

//we are exporting the fs module that will help us to perform
//  the certain operation such as readFile writeFile
const fs = require("fs")
const { json } = require("stream/consumers")


const app = express()

app.use(express.json())


app.get("/students", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    res.send({ "msg": "fetched data successfully!", "Students data": parsedData.students})
})

app.get("/teachers", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    res.send({"msg": "teachers data fetched is done", "teachers": parsedData.teachers})
})

app.post("/teachers", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    const new_teacher = req.body
    parsedData.teachers.push(new_teacher)
   fs.writeFileSync("./data.json", JSON.stringify(parsedData, null, 2))
    res.send({"msg": "new teacher data has been added","newTeachers": parsedData.teachers})
})



app.listen(5000, () => {
    console.log("server is running at http://localhost:5000")
})