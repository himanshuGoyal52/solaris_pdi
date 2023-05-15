import mongoose, { mongo } from 'mongoose';

const lessonSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : true,
    },
    instructor : {
        type : String,
        required : true,
    },
    cloudinary_id : {
        type : String,
    },
    videoUrl : {
        type : String,
    },
    title : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    length : {
        type : String,
    }
    
});
const Lesson = mongoose.model('Lesson',lessonSchema);

export default Lesson;