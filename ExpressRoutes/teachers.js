
const express = require("express")

const router = express.Router()
const fs = require("fs");


router.get("/", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    res.send({ "msg": "teachers data fetched is done", "teachers": parsedData.teachers })
})

router.post("/", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    const new_teacher = req.body
    parsedData.teachers.push(new_teacher)
    fs.writeFileSync("./data.json", JSON.stringify(parsedData, null, 2))
    res.send({ "msg": "new teacher data has been added", "newTeachers": parsedData.teachers })
})

router.put("/:id", (req, res) => {

    const id = req.params.id
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)

    let isUpdated = false

    parsedData.teachers.forEach((el) => {
        if (el.id == id) {
            el.name = req.body.name
                el.city = req.body.city
                isUpdated = true
        }
    })

    fs.writeFileSync("./data.json", JSON.stringify(parsedData))

    if(isUpdated == true){
        res.send("the data is updated")
    }else{
        res.send("the data is not updated")
    }

    res.send("updated data")

})

router.delete("/:id", (req, res) =>{
  
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    const id = req.params.id

    updatedData = parsedData.teachers.filter((el) => el.id != id);
    fs.writeFileSync("./data.json", JSON.stringify(updatedData))

    res.send("this is deleted")

})

module.exports = router 