import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import fs from 'fs'
import Lesson from '../models/lessonModel.js';
// import uploadControler from './uploadControler.js';
// import { storage } from '../lib/multer.js';
// import multer from 'multer';

const lessonRouter = express.Router();

lessonRouter.post("/create" ,expressAsyncHandler( async(req, res)=>{
    try{
        const lesson = new Lesson({
            courseName : req.body.courseName,
            instructor : req.body.instructor,
            title : req.body.title,
            desc : req.body.desc,
            length : '50:13',
        });
        const createdLesson = await lesson.save();
        res.send(createdLesson);
    }catch(err){
        res.status(500).send({message : err.message });
    }
})
);

lessonRouter.get('/:id' , expressAsyncHandler( async(req,res) => {
    try{
        const lesson = await Lesson.findById(req.params.id);
        res.send(lesson);
    }catch(err){
        res.status(500).send({message : err.message})
    }
})
);


// lessonRouter.post('/upload' , storage.single('file') , uploadControler);

export default lessonRouter;