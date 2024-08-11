const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    // No longer need to specify useNewUrlParser and useUnifiedTopology
  });
};

module.exports = connectDB;
