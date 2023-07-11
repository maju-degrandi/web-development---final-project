import mongoose from "mongoose";

const ItemOrderModel = mongoose.Schema({
    order: {
        type: mongoose.ObjectId,
        required: true
    },
    item: {
        type: mongoose.ObjectId,
        required: true
    },
    qtt: {
        type: Number,
        required: true
    }
});

export default mongoose.model('ItemOrder', ItemOrderModel); 
