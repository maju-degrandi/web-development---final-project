import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    person: {
        type: String,
        required: true
    },
    adm: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true
    },
    address: {
        country: String,
        state: String,
        city: String,
        cep: String,
        street: String,
        number: Number,
        obs: String
    }
});

export default mongoose.model('User', userSchema); 