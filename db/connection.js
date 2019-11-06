const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/countries_db", { useNewUrlParser: true });

module.exports = mongoose;