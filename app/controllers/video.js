const db = require('../models');
const video = db.video


exports.findAll = (req,res) => {
    video.find()
    .then((result) => {
        res.send(result)   
    }).catch((err) => {
        res.status(500).send({message:err.message})
    });
}

exports.create = (req,res) => {
    video.create(req.body)
    .then((result) => {
        res.send(result)   
    }).catch((err) => {
        res.status(500).send({message:err.message})
    });
}