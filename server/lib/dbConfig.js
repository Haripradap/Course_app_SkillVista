const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI); // No options needed for Mongoose 6.x+

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
