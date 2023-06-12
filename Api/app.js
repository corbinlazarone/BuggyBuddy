const express = require('express');
const connectDB = require('./db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// db
connectDB();

// middleware
app.use(morgan('dev'))
app.use(cors({origin: true, credentials: true})); 

// routes
const testRoutes = require('./routes/test')
app.use("/", testRoutes)

// port
const port = process.env.PORT;

// listener
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})