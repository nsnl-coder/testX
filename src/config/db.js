const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const db = () => {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongodb Database Connected');
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = db;
