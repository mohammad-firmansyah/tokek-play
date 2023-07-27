module.exports = app => {
    const product =  require('./controllers/product');
    const comment =  require('./controllers/comment');
    const video =  require('./controllers/video');
    
    const r = require("express").Router()
    
    app.use("/api/v1",r)

    r.get("/product/:videoId",product.getDetail)
    r.post("/product",product.create)
    r.get("/comment/:videoId",comment.getDetail)
    r.post("/comment",comment.submitComment)
    r.get("/video",video.findAll)
    r.post("/video",video.create)


}