import mongoose, { mongo } from 'mongoose';

const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    instructorEmail : {
        type : String,
        required : true,
    },
    tag : {
        type : String,
        required : true,
    },
    thumbnail : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    duration : {
        type : Number,
        required : true,
    },
    rating : {
        type : Array,
        default : [],
    },
    price : {
        type : Number,
    },
    about : {
        type : String,
        required : true,
    },
    wwyl : {
        type : String,
        required : true,
    },
    content : {
        type : Array,
        required : true,
        default : [],
    },
    enrolledStudent : {
        type:Array,
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    position : {
        type : String,
        default : "new",
    },
    razorpay_first_id : String,
    
});
const Course = mongoose.model('Course',courseSchema);

export default Course;