import express from "express";
import orderController from "../controllers/order-controller.js";

const router = express.Router();

router.post('/order/add', orderController.createOrder);    
router.delete('/order/:id', orderController.deleteOrder);    
router.put('/order/:id', orderController.updateOrder);    
router.get('/order', orderController.getAllOrders);

export default router;