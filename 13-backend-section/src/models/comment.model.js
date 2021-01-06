const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    comment: {
        type: String, 
        required: true //6.13.1
    },
    description: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true      //trae tod el documento autor
    }
});

module.exports  = mongoose.model("comment", CommentSchema)

