const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/demonDB", {
  useNewUrlParses: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
