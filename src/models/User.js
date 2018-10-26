const mongoose = require('mongoose');
const PostSchema = require('./PostSchema');

const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Username is required'],
        validate :{
            validator : (name)=> name.length > 2,
            message : 'Username must be atleast 3 characters long'
        }
    },
    email : {
        type: String,
        required: [true, 'Email Address is required'],
    },
    phone: {
        type: Number,
        required: [true, 'Phone number is required'],
        validate: {
            validator: (phone) => phone.toString().length === 10,
            message: 'Phone number must be exactly 10 digits long'
        }
    },
    posts: [PostSchema]
});

UserSchema.virtual('postCount').get(function(){
    return this.posts.length;
});

const User =  mongoose.model('user', UserSchema);

module.exports = User;