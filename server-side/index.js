const express = require("express");
const cors = require("cors");
// const { config } = require("dotenv");
const app = express();
const port = 5000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
