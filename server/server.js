require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./lib/dbConfig')


const port = process.env.PORT || 5000
const app = express();

cors({
   origin: process.env.CLIENT_URL,
   methods: [ 'GET','POST' ,'DELETE' ,'PUT'],
   allowedHeaders: ['content-type', 'Authorization', ] 
});

app.use(express.json());

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).json({
        success:false,
        message: "Something went wrong",
    })
    
})

app.listen(port, () => {
    connectDB();
    console.log(`Server listening on port ${port}`);
});
