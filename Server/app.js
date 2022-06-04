const express= require('express');
const app=express();

const mongoose = require('mongoose');



require("./connection/connect");
//require('./db/connection');

app.use(express.json());


// we link the router files to make our route easy 
app.use(require('./routes/auth'));



const start = async () => {
    try {
      app.listen(4000, console.log(`Server listening to port : 4000`));
    } catch (error) {
      console.log(error);
    }
  };
  start();
  app.get('/', (req,res)=>{
    res.send('Hello Home');
});

app.get('/usersignup', (req,res)=>{
    res.send('Hello signup');
});
app.get('/usersignin', (req,res)=>{
    res.send('Hello Signin');
});