import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';
import Razorpay from 'razorpay';
import config from '../config.js';
import crypto from 'crypto'

const courseRouter = express.Router(); 

courseRouter.post("/create" ,expressAsyncHandler( async(req, res)=>{
    try{
        const course = new Course({
            name : "Name here",
            instructorEmail : req.body.instructorEmail,
            tag : 'new',
            thumbnail : './thumnail.png',
            desc : 'desc here',
            duration : 45,
            price : 1000,
            about : 'abou me',
            content : 'afdaf',
            wwyl : 'adfdafadf',
            type : 'nnnewww',
        });
        const createdCourse = await course.save();
        res.send(createdCourse);
    }catch(err){
        res.status(500).send({message : err.message });
    }
})
);

courseRouter.post('/' , expressAsyncHandler( async (req,res)=>{
    if(req.body.type == "Allcourses"){
        const courses = await Course.find({});
        res.send(courses);
    }else{
        const courses = await Course.find({type : req.body.type});
        res.status(200).send(courses);
    }
})
);

courseRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const course = await Course.findById(req.params.id);
    res.send(course);
})
);


courseRouter.post('/:id/enroll' , expressAsyncHandler(async(req,res)=>{
    const course = await Course.findById(req.params.id);
    if(!course){
        res.status(404).send({
            message : "course Not Found",
        });
    }
    else{
        let _data = {
            "type" : req.body.type,
            "user" : req.body.user
        }
        course.enrolledStudent.push(_data)
        const updatedCourse = await course.save();
        res.send(updatedCourse);
    }
})
);

courseRouter.post('/:id/rating' , expressAsyncHandler(async(req,res)=>{
    const course = await Course.findById(req.params.id);
    if(!course){
        res.status(404).send({
            message : "course not found",
        });
    }else{
        let _data = {
            "user" : req.body.user,
            "date" : Date.now(),
            "star" : req.body.star,
            "comment" : req.body.comment,
        };
        course.rating.push(_data)
        await course.save();
        res.send({
            message : "Rating done sussesfully",
            _data : _data,
        });
    }
})
);

courseRouter.post('/usercourses' , expressAsyncHandler(async (req,res)=>{
    const userCourses = await Course.find({enrolledStudent:{$elemMatch:{user : req.body.user}}});
    res.status(200).send(userCourses);
})
);

/*=================================================================================*/
// const razorpay = new Razorpay({
//     key_id : config.KEY_ID,
//     key_secret : config.KEY_SECRET,
// });
courseRouter.post('/razorpay' ,expressAsyncHandler( async (req,res) =>{
    const course = await Course.findById(req.body.id);
    let options = {
        amount : 1000 * 100,
        currency : "INR",
    };
    razorpay.orders.create(options , (err,order) =>{
        course.razorpay_first_id = order.id;
        course.save();
        res.json(order);
    })
})
)

courseRouter.delete('/:id/delete',expressAsyncHandler(async(req,res)=>{
    const course = await Course.findById(req.params.id);
    if(course){
        const deletedcourse = await course.remove();
        res.send({message : 'course deleted', course : deletedcourse});
    } else{
        res.status(404).send({message : 'course not found !'});
    }
})
);

courseRouter.post('/:id/verify' , expressAsyncHandler( async(req,res)=>{
    const course = await Course.findById(req.body.course_id);
    if(course){
        
        var check = req.body.razorpay_order_id+"|"+req.body.razorpay_payment_id;
        var expectedSignature = crypto.createHmac('sha256',config.KEY_SECRET)
                        .update(check.toString())
                        .digest('hex');
        if(expectedSignature === req.body.razorpay_signature){
            let _data = {
                "type" : "paid",
                "user" : req.body.user_id,
                "razorpay_payment_id" : req.body.razorpay_payment_id,
                "razorpay_order_id" : req.body.razorpay_order_id,
                "razorpay_signature" : req.body.razorpay_signature,
            }
            course.enrolledStudent.push(_data)
            await course.save();

            res.send({message : 'course Paid and enrolled'});
        }else{
            res.status(401).send({message:'Payment Unsuccessful'});
        }
    }else{
        res.status(404).send({message:'Course Not Found'});
    }
})
);

export default courseRouter;