const mongoose = require('mongoose');

const dbConnect = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('Connected to database successfully');
  } catch (err) {
    console.log('DB connection error', err.message);
  }
};

module.exports = dbConnect;
