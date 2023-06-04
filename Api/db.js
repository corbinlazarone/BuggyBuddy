// db
const { default: mongoose } = require('mongoose');


// Connect to db
const connectDB = async() =>{
    try {
        const connection = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log(`Connected to MongoDB`)
        }).catch((error) => {
            console.log(`Error Connecting to MongoDb: ${error}`)
        })
        await connection
    } catch (err) {
        console.error(`Failed to connect to mongoDB: ${err}`)
    }
}

module.exports = {connectDB};