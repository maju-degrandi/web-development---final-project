import PlantModel from "../models/plant-model.js";
import { isValidObjectId } from "mongoose";

const plantService = {
    addPlant: async(body) => {
        console.log(body)
        const newPlant = new PlantModel({
            name: body.name,
            category: body.category,
            price: body.price,
            cover: body.cover,
            water: body.water,
            light: body.light,
            stock: body.stock
        });
        const PlantCreated = await newPlant.save();
        return PlantCreated;
    },
    deletePlant: async (id) => {
        if(!isValidObjectId(id))
            return res.status(404).send("Plant not found");

        const plant = await PlantModel.findOneAndDelete({ _id: id}).exec();

        return plant;
    },
    updatePlant: async (id, body) => {
        if(!isValidObjectId(id))
            return res.status(404).send("Plant not found");
        
        const updatedPlant = await PlantModel.findOneAndUpdate(
            { _id: id }, 
            {   category: body.category,
                cover: body.cover,
                price: body.price,
                water: body.water,
                light: body.light,
                stock: body.stock },
            { new: true }
        );

        return updatedPlant;
    },
    getPlant: async (id) => {
        if(!isValidObjectId(id))
        return res.status(404).send("Plant not found");

        const plantFound = await PlantModel.find({ _id : id});

        return plantFound;
    },
    getPlantList: async () => {
        const plantList = await PlantModel.find();
        
        return plantList;
    }
}

export default plantService;