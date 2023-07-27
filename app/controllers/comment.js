const db = require('../models');
const comment = db.comment


exports.getDetail = (req,res) => {
    const id = req.params.videoId

    comment.findOne({videoId:id })
    .then((result) => {
        res.send(result)   
    }).catch((err) => {
        res.send(err)
    })
}

exports.submitComment = (req,res) => {
    comment.create(req.body)
    .then((result) => {
        res.send(result)   
    }).catch((err) => {
        res.send(err)
    })
}