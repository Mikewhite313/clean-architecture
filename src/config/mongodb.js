const { connect } = require("mongoose");

const DB_URI = process.env.MONGO_URI;

module.exports = connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((result) => {
    console.log("Successfully Connected!");
  })
  .catch((error) => console.log(error));
