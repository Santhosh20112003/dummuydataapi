const router = require('express').Router();
const jokes = require('../models/jokes.model');
const auth = require('../models/authentication.model')

router.route('/').get((req, res) => {
  const token = req.header("token");

  if(token){
	auth.find({
		"token" : token 
	   }).then(token =>{
		if(token.length > 0){
			jokes.find()
			.then(jokes => res.json(jokes))
			.catch(err => res.status(400).json('Error retrieving the joke documents: ' + err));
		}
		else{
			res.sendStatus(403);
		}
	   }).catch(err =>{
		res.sendStatus(400);
	   })
  }
  else{
	res.status(401).json("Api Key is Required");
  }

 
});


router.route("/add").post((req,res)=>{
	const id = req.body.id;
	const type = req.body.type;
	const setup = req.body.setup;
	const punchline = req.body.punchline;
	const newjoke = new jokes({id,type,setup,punchline});
	newjoke.save().then(()=>{
	  res.json(' Item Added');
	}).catch((err)=>{
	  res.status(400).json('Error'+err)
	});
  })

module.exports = router;