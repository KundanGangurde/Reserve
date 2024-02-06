const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();
// app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://gangordaykondan:gangordaykondan@cluster0.s34wiae.mongodb.net/db?retryWrites=true&w=majority"
    ).then(()=>{
        console.log("mongoose is connected")
    }).catch((err)=>{
        console.log({err})
    })

    app.get('/gettrips', (req,res)=>{
        
    })

app.listen(3001, ()=> {
    console.log("server is running")
})