const router = require('express').Router();
const auth = require('../models/authentication.model');
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.route('/').get((req, res) => {
  const token = req.header("token");
  if(token==process.env.ADMIN){
	auth.find()
  .then(auth => res.json(auth))
  .catch(err => res.status(400).json('Error retrieving the Ecommerce documents: ' + err));
  }
  else{
	res.send({"error":"Unauthorized Access Denied!"})
  }
});


router.route("/add").post((req,res)=>{
	const email = req.body.email;
	const name = req.body.name;
	const adminkey = req.header("token");
    if(adminkey === process.env.ADMIN){
		const token = jwt.sign({email,name},process.env.ADMIN_SECRET_KEY);
		const newauth = new auth({email,name,token});
		newauth.save().then(()=>{
		  res.json('User Added');
		}).catch((err)=>{
		  res.status(400).json('Error:'+err)
		});
	}
	else{
		res.send({"error":"Unauthorized Access Denied!"})
	}

	
  })

module.exports = router;