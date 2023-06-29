const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://venisha:Venisha2507@cluster0.kfntie6.mongodb.net/inotebook";

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
