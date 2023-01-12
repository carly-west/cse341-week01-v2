var express = require("express");
var app = express();
const mongodb = require("./db/connect");
const port = process.env.PORT || 8080;

app.set("port", process.env.PORT || 8080);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on port ${port}`);
  }
});
