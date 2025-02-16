const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo Connected : ${con.connection.host}`)
    } catch (error) {
        console.log(`Errorrr : ${error.message}`) 
    }
}

module.exports = connectDB;