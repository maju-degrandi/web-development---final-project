import express from "express";
const router = express.Router();
import { PlantController } from "../controllers/plant-controller";


router.post('/plant/add', PlantController.createPlant);
router.delete('/plant/:id', PlantController.deletePlant);
router.put('/plant/:id', PlantController.updatePlant);
router.get('/plant', PlantController.getAllPlant);

