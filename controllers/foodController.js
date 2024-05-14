// foodController.js

import Food from '../models/foodModel.js';

const addFood = async (req, res) => {
    try {
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }
        
        const { name, description, price, category } = req.body;

        const image_filename = req.file.filename;

        const food = new Food({
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
        const foods = await Food.findAll();
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error getting foods" });
    }
};

const removeFood = async (req, res) => {
    try {
        const { id } = req.params;

        const foodToRemove = await Food.findByPk(id);
        if (!foodToRemove) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        await foodToRemove.destroy();
        return res.json({ success: true, message: "Food removed successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Error removing food" });
    }
};


export { addFood, listFood, removeFood };
