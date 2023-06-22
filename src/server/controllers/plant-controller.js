import {isValidObjectId, mongoose} from "mongoose";
import { PlantModel } from "../models/plant-model";

module.exports.createPlant = async (req, res) => {

    const newPlant = new PlantModel({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        water: req.body.water,
        light: req.body.light,
        cover: req.body.light,
        stock: req.body.stock
    });

    const PlantCreated = await newPlant.save();
    return res.status(200).json(PlantCreated);
}


module.exports.deletePlant = async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id))
        return res.status(404).send("Plant not found");
    
    const plant = await PlantModel.findOneAndDelete({ _id: id}).exec();

    if(plant) return res.status(200).json(plant)
    return res.status(404).send("Plant not found");
}

module.exports.updatePlant = async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id))
        return res.status(404).send("Plant not found");

    const updatedPlant = await PlantModel.findOneAndUpdate(
        { _id: id }, 
        {   category: req.body.category,
            price: req.body.price,
            water: req.body.water,
            light: req.body.light,
            cover: req.body.light,
            stock: req.body.stock },
        { new: true }
    );
    return res.status(200).json(updatedPlant);
}

module.exports.getAllPlants = async (req, res) => {
    const plantsFound = await PlantModel.find();
    
    if(plantsFound.length > 0)
        return res.status(200).json(plantsFound);
    
    return res.status(404).send("Plants not Found");
}
