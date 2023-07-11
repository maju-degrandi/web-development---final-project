import mongoose from "mongoose";

const OrderModel = mongoose.Schema({
    user: {
        type: mongoose.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    total: {
        type: Number,
        required: true,
        default: 0
    }
});

export default mongoose.model('Order', OrderModel); 
// Hi
// How are u doin'?
// I'm very sad
// whyy?? We are almost there.