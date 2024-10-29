const express = require("express");

const app = express();

app.use("/test", (req, res) => res.send("hello hello..."));

app.listen(3000, () => {
  console.log("app is sucessfuly listening on server 3000...");
});
