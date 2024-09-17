const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI); 

    const conn = await mongoose.connect(`mongodb+srv://aashishmishra5131:Password@mernchat.4pzyz.mongodb.net`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
