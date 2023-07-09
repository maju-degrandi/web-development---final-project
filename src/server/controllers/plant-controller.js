
import PlantModel from "../models/plant-model.js";
import plantService from "../services/plant-service.js";
import { isValidObjectId } from "mongoose";

const plantController = {
    createPlant: async (req, res) => {
        const PlantCreated = await plantService.addPlant(req.body)
        
        if(PlantCreated)
            return res.status(200).json(PlantCreated);
       
        return res.status(404).send("DB not found");
    },
    
    deletePlant: async (req, res) => {
        const id = req.params.id;

        if(!isValidObjectId(id))
            return res.status(404).send("Plant not found");
        
        const plant = await plantService.deletePlant(id);
    
        if(plant) 
            return res.status(200).json(plant);
        
        return res.status(404).send("Plant not found");        
    },
    
    updatePlant: async (req, res) => {
        const id = req.params.id;

        if(!isValidObjectId(id))
            return res.status(404).send("Plant not found");

        const updatedPlant = await plantService.updatePlant(id, req.body);

        if(updatedPlant)
            return res.status(200).json(updatedPlant);
            
        return res.status(404).send("Plant not found.");      
    },
    
    getAllPlants: async (req, res) => {
        const plantsFound = await plantService.getPlantList();
        
        if(plantsFound.length > 0)
            return res.status(200).json(plantsFound);
        
        return res.status(404).send("Plants not Found");
    },

    getPlant: async (req, res) => {
        const id = req.params.id;
       
        if(!isValidObjectId(id))
            return res.status(404).send("Plant not found");

        const plantFound = await plantService.getPlant(id);
        
        if(plantFound)
            return res.status(200).json(plantFound);

        return res.status(404).send("Plant not found");
    }
}

export default plantController;