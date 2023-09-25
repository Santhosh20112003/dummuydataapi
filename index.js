const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.get("/ecommerce",(req,res)=>{
	res.sendFile(__dirname+'/ecommerce.json');
})

app.get("/music",(req,res)=>{
	res.status(200).sendFile(__dirname+'/music.json');
})

app.get("/ecommerce",(req,res)=>{
	res.sendFile(__dirname+'/jokes.json');
})

app.listen(3000,()=>{
	console.log("From the Rest Api");
})

