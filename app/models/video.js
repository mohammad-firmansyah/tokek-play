module.exports = mongoose => {
    const scheme = mongoose.Schema({
        url:String,
    },{
        timestamp:true
    })

    return mongoose.model('videos',scheme)
}