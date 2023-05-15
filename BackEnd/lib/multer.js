import multer from "multer";

export let storage = multer.diskStorage({});
export let fileFilter = (req , file , cb) => {
    let ext = path.extname(file.originalname);
    if(ext !== ".mp4" && ext !== ".mkv" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"){
        cb(new Error("File type is not supported") , false);
        return ;
    }
    cb(null , true);
}