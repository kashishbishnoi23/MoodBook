const express = require("express");

const app = express(); // creates the server -> app

const port = 80;

app.listen(port, ()=>{
    console.log("Server is running on port " , port);
}) 


app.use(express.static("public"));


