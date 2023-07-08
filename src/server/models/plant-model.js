import mongoose from "mongoose";

const PlantModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    cover:{
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    water: {
        type: Number
    },
    light: {
        type: Number
    },
});

export default mongoose.model('Plant', PlantModel); 
// Hi
// How are u doin'?
// I'm very sad