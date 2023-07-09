import express from "express";
import PlantController from "../controllers/plant-controller.js";

const router = express.Router();

router.post('/plant/add', PlantController.createPlant);    
router.delete('/plant/:id', PlantController.deletePlant);    
router.put('/plant/:id', PlantController.updatePlant);
router.get('/plant/:id', PlantController.getPlant);    
router.get('/plant', PlantController.getAllPlants);

export default router;