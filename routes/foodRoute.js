import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploads = multer({ storage: storage });

// Note: 'image_filename' should match the field name used in FormData on the client-side
foodRouter.post('/add', uploads.single('image_filename'), addFood);
foodRouter.get('/list', listFood);
foodRouter.delete('/remove/:id', removeFood);

export default foodRouter;
