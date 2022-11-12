require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose")

const connStringMongoDB = process.env.DB_CONN;
mongoose.connect(connStringMongoDB);
const database = mongoose.connection;
database.on('error', (err)=>console.log(err));
database.once('conncected', ()=>console.log("Conected to database"));

const app = express();
app.use(express.json());

//import routes
const userRoute = require("./routes/user");

//custom middlewares
const {errorHandler, endpointNotFound} = require("./middleware/errorMiddleware");


// rourtes
app.use("/api/users", userRoute);
app.use("*", endpointNotFound);

app.use(errorHandler);

app.listen(process.env.PORT)