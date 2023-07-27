const db = require('../models');
const product = db.product


exports.getDetail = (req,res) => {
    const id = req.params.videoId

    product.findOne({videoId: id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({message:err.message})
    })
}


exports.create = (req,res) => {
    product.create(req.body)
    .then((result) => {
        res.send({message:"Data berhasil disimpan"})   
    }).catch((err) => {
        res.status(500).send({message:"Data gagal disimpan"})
    });
}