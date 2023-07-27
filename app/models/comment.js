module.exports = mongoose => {
    const scheme = mongoose.Schema({
        username:String,
        comment:String,
        videoId:String
    },{
        timestamp:true
    })

    return mongoose.model('comments',scheme)
}