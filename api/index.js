const express = require('express'); 
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
const User = require('./models/users');
const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();
app.use(express.json());

// dotenv environmental variable
const mongourl = process.env.MONGO_URL; // mongoDB Connection Url
const jwtKey = process.env.jwtSecretKey; // jwt Secret key

//connnecting to the mongodb 
mongoose.connect(mongourl);

app.get("/test", (req, res) => {
    // console.log(req);
    res.send(req.body);

});



app.post("/register",async (req, res) => {
    
    const {username, password} = req.body;
    const createdUser = await User.create({username, password});

    jwt.sign({userId : createdUser._id}, jwtKey, (err, token)=>{
        if(err){
            throw(err);
        }else{
            res.cookie('token', token).status(201).json('ok');
        }
    }); 

});


app.listen(4000, function(){
    console.log("Server is started at port 4000");
});