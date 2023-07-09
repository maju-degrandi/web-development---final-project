
import ItemOrderModel from "../models/item-order-model.js";
import { isValidObjectId } from "mongoose";

const itemOrderController = {
    createItemOrder: async (req, res) => {
        
        try{
            const newItemOrder = new ItemOrderModel({
                order: req.body.order,
                item: req.body.item,
                qtt: req.body.qtt
            });
            const ItemOrderCreated = await newItemOrder.save();
            if(ItemOrderCreated)
                return res.status(200).json(ItemOrderCreated);

            return res.status(404).send("ItemOrder not created successfuly");

        }catch(e){
            
            console.log(e);
            return res.status(418).send("I'm A TEAPOT");
        }
        
       
    },

    deleteItemOrder: async (req, res) => {
        const id = req.params.id;
        if(!isValidObjectId(id))
            return res.status(404).send("Item Order not found");
    
        const itemOrder = await ItemOrderModel.findOneAndDelete({ _id: id }).exec();
        if(itemOrder)
            return res.status(200).json(itemOrder);
    
        return res.status(404).send("Item Order not found");
    },
    
    getAllItemOrder: async (req, res) => {
        const itemOrdersFound = await ItemOrderModel.find();;
        
        if(itemOrdersFound.length > 0)
            return res.status(200).json(itemOrdersFound);
        
        return res.status(404).send("Item Order not Found");
    }
}

export default itemOrderController;