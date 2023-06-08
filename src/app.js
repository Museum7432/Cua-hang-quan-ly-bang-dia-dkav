const express = require("express");
const app = express();
const {PORT} = require("../configs/configs.js")

var index = require("./routes/index.js");

app.use("/", index);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
