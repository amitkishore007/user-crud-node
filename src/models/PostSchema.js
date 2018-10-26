const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Post title is required'],
        validate :{ 
            validator : (title)=> title.length > 4,
            message : "Post title must be atleast 5 characters long"
        }
    },
    content: {
        type: String,
        require: [true, 'Post content is required'],
        validate: {
            validator: (content) => title.length > 5,
            message: "Post content must be atleast 6 characters long"
        }
    }
});

module.exports = PostSchema;