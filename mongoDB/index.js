const express = require("express")
const { connectToMongoDB } = require("./config/databaseConnection")
const { userRouter } = require("./routes/userRouter")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
      console.log("hello from home")
})


app.use("/users", userRouter)



app.listen(8000, () => {
    console.log("server is running at http://localhost:8000");
    connectToMongoDB();
})