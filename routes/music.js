const router = require('express').Router();
const music = require('../models/music.model');

router.route('/').get((req, res) => {
  music.find()
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the music documents: ' + err));
});

router.route('/name').get((req, res) => {
  music.find({}, { name: 1 })
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the titles: ' + err));
});

router.route('/images').get((req, res) => {
  music.find({}, { img: 1 })
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the images: ' + err));
});

router.route('/audio').get((req, res) => {
  music.find({}, { audio: 1 })
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the categories: ' + err));
});

router.route("/add").post((req,res)=>{
	const name = req.body.name;
	const artist = req.body.artist;
	const img = req.body.img;
	const audio = req.body.audio;
	const newmusic = new music({name,artist,img,audio});
	newmusic.save().then(()=>{
	  res.json(' music Added');
	}).catch((err)=>{
	  res.status(400).json('Error'+err)
	});
  })

module.exports = router;