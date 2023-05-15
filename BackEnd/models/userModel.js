import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        index : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    typeOf : {
        type : String,
        required : true,
    },
    isAdmin : {
        type : Boolean,
        required : true,
        default : false,
    },
    courses : {
        type : [ { _id : String , Name : String , instructor : String , duration : Number , covered : Number , rating : Number } ],
        default : []
    },
    likedCourses : {
        type : [{ _id : String , Name : String , instructor : String , duration : Number , rating : Number } ],
        default : []
    },
    earnings : {
        type : Number,
        default : 0,
    }
});
const User = mongoose.model('User',userSchema);

export default User;