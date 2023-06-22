import mongoose from "mongoose";

const PlantSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    water: Number,
    light: Number
});

mongoose.exports = mongoose.model('Plant', PlantSchema);

// Hi
// How are u doin'?