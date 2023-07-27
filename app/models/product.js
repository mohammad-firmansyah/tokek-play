module.exports = mongoose => {

    const scheme = mongoose.Schema({
        title: String,
        url: String,
        price:Number,
        videoId:String,
      
    },{
        timestamps:true
    })

    return mongoose.model("products",scheme)
}

