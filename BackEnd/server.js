import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import config from './config.js';
import userRouter from './routers/userRouter.js';
import courseRouter from './routers/courseRouter.js';
import videoRouter from './routers/videoRouter.js';
import lessonRouter from './routers/lessonRouter.js';
// import path from 'path';


const app = express();
app.use(cors());


/* for production version */

app.use(express.static(path.join(__dirname,'/../FrontEnd')));
app.get('*' , (req,res) => {
  res.sendFile(path.join(__dirname,'/../FrontEnd/index.html'));
});


// app.use(bodyParser.json());
// app.use(express());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

async function main() {
  await mongoose.connect(config.MONGODB_URL);
}
main().catch(err => console.log(err));
main().then(()=>{
  console.log('Connected to database');
})


app.use('/api/user',userRouter);
app.use('/api/course',courseRouter);
// app.use('/api/video' , videoRouter);
app.use('/api/lesson' , lessonRouter);

app.use((err,req,res,next)=>{
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({message : err.message});
});


app.listen(config.PORT, () => {
  console.log('serve at http://localhost:5000');
});

// mongoose
// .connect(config.MONGODB_URL , {
//   useNewUrlParser : true,
//   useUnifiedTopology : true,
//   useCreateIndex : true,
// })
// .then(()=>{
//   console.log('Connected to database');
// })
// .catch((error)=>{
//   console.log(error.reason);
// });