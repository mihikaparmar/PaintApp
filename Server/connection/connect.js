const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect('mongodb+srv://paintapp:paintapp123@cluster0.jmf8s.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });