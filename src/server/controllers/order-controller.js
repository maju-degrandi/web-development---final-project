
import OrderModel from "../models/order-model.js";
import { isValidObjectId } from "mongoose";

const orderController = {
    createOrder: async (req, res) => {
        
        try{
            const newOrder = new OrderModel({
                user: req.body.user,
                date: req.body.date,
                total: req.body.total
            });
            const OrderCreated = await newOrder.save();
            if(OrderCreated)
                return res.status(200).json(OrderCreated);

            return res.status(404).send("Order not created successfuly");

        }catch (e){
            return res.status(418).send("I'm A TEAPOT");
        }
       
    },

    updateOrder: async (req, res) => {
        const id = req.params.id;
        if(!isValidObjectId(id))
            return res.status(404).send("Order not found");
    
        const updatedOrder = await OrderModel.findOneAndUpdate(
            { _id: id }, 
            { total: req.body.total },
            { new: true }
        );
        return res.status(200).json(updatedOrder);
    },

    deleteOrder: async (req, res) => {
        const id = req.params.id;
        if(!isValidObjectId(id))
            return res.status(404).send("Order not found");
    
        const order = await OrderModel.findOneAndDelete({ _id: id }).exec();
        if(order)
            return res.status(200).json(order);
    
        return res.status(404).send("Order not found");
    },
    
    getAllOrders: async (req, res) => {
        const ordersFound = await OrderModel.find();;
        
        if(ordersFound.length > 0)
            return res.status(200).json(ordersFound);
        
        return res.status(404).send("Orders not Found");
    },

    getOrdersByUser: async (req, res) =>{
        const user = req.params.user;
        if(!isValidObjectId(user))
            return res.status(404).send("Order not found");

        const ordersFound = await OrderModel.find({user : user});
        
        if(ordersFound.length >= 0)
            return res.status(200).json(ordersFound);

        return res.status(404).send("Orders not found");
    }
}

export default orderController;