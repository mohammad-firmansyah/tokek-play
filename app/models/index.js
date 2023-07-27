const dbConfig = require("../config/db")
const mongoose = require('mongoose');

module.exports = {
    mongoose,
    url:dbConfig.url,
    product: require("../models/product.js")(mongoose),
    video: require("../models/video.js")(mongoose),
    comment: require("../models/comment.js")(mongoose)
}