const { userModel } = require("../usersSchema");

const createUser = async(req, res) => {
    try {
        
        const {
            name,
            age,
            isAlive
        } = req.body

        // first way to create a Data
        // const newUser = await userModel.insertOne({
        //     name:name,
        //     age:age,
        //     isAlive:isAlive

        // })

        //second way to create Data
        // its a better way from my Pov
        const newUser = await userModel.create({
            name,
            age,
            isAlive
        })

        // third way to create data
        // inthird way we have to save the data using await newUser.save()

        // const newUser = new userModel({
        //     name,
        //     age,
        //     isAlive
        // })

        // await newUser.save()


        res.status(200).json(
           {
            data: newUser,
            msg: "data is created"
           }
        )

    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong")
    }
}



module.exports = {createUser}