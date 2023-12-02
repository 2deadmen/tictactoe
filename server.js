const connectToMongo = require("./dbconnect");
const express = require("express");
const PORT = 5000;
connectToMongo();
const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/user", require("./router"));

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
