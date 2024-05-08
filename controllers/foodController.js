import foodModel from '../models/foodModel.js'; // Import your foodModel if not already imported

const addFood = async (req, res) => {
    try {
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }
        
        const image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        return res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { addFood };
