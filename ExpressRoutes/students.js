const express = require("express")

const fs = require("fs")

const router = express.Router()



router.get("/", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedData = JSON.parse(data)
    res.send({ "msg": "fetched data successfully!", "Students data": parsedData.students })
})


module.exports = router