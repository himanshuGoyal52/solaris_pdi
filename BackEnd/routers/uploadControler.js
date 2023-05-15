import Lesson from "../models/lessonModel";
import cloudinary from 'cloudinary';
const Cloudinary = cloudinary.v2;

Cloudinary.config({
    cloud_name: 'durhrnocx', 
    api_key: '885822733448873', 
    api_secret: 'OVGaQxe12ct-LIx4nMCBCIsD6K0'
})

export default uploadVideo = (req , res) => {
    Cloudinary.uploader.upload(req.file.path,
        {
            resource_type : "video",
            folder : "video",
        },  
        (err,result) => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        const upload = new Lesson({
            courseName : req.body.courseName,
            instructor : req.body.instructor,
            title : req.body.title,
            desc : req.body.desc,
            length : '50:13',
            videoUrl : result.url,
            cloudinary_id : result.public_id,
        });
        upload.save((err,result) => {
            if(err){
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(result);
        })
    })
}