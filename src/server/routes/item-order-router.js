import express from "express";
import itemOrderController from "../controllers/item-order-controller.js";

const router = express.Router();

router.post('/item-order/add', itemOrderController.createItemOrder);    
router.delete('/item-order/:id', itemOrderController.deleteItemOrder);    
router.get('/item-order', itemOrderController.getAllItemOrder);

export default router;