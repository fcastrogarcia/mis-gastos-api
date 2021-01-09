const express = require("express");
const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log("app listening in port 3000");
});
