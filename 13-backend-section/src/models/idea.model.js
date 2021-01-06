const mongoose = require('mongoose');
const { Schema } = mongoose;

const IdeaSchema = new Schema({
    idea: {
        type: String, 
        required: true //6.13.1
    },
    description: {
        type: String
    },
    upvotes: [{
        type: Boolean
    }],
    downvotes: [{
        type: Boolean
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true      //trae tod el documento autor
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "comment",
        required: true,
        autopopulate: true      //trae tod el documento autor
    }]
});

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports =  mongoose.model("idea", IdeaSchema);

