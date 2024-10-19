const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    title: 
    {
        type: String,
    },

    content: 
    {
        type: String,
        unique: true
    },

    id: 
    {
        type: mongoose.Schema.Types.ObjectId, ref:"User",
        
    },

    createdAt: 
    {
        type: Date,
        default: Date.now,
        
    }
})

module.exports = mongoose.model("Post", postSchema);