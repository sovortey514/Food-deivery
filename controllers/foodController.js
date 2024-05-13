import foodModel from '../models/foodModel.js';

const addFood = async (req, res) => {
    try {
        if (!req.file || !req.file.filename) { // Corrected condition to check req.file.filename
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }
        
        const { name, description, price, category } = req.body;

        const image_filename = req.file.filename; // Accessing req.file.filename

        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename
        });

        await food.save();
        return res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error getting foods" });
    }
}

export { addFood, listFood };
