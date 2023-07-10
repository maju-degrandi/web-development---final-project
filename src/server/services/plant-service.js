import PlantModel from "../models/plant-model.js";

const plantService = {
    addPlant: async(body) => {
        try{
            const newPlant = new PlantModel({
                name: body.name,
                category: body.category,
                price: body.price,
                cover: body.cover,
                water: body.water,
                light: body.light,
                description: body.description,
                stock: body.stock
            });
            const PlantCreated = await newPlant.save();
            return PlantCreated;

        }catch{
            return null;
        }
    },
    deletePlant: async (id) => {

        const plant = await PlantModel.findOneAndDelete({ _id: id}).exec();

        return plant;
    },
    updatePlant: async (id, body) => {
        try{
            const updatedPlant = await PlantModel.findOneAndUpdate(
                { _id: id }, 
                {   name: body.name,
                    category: body.category,
                    cover: body.cover,
                    price: body.price,
                    description: body.description,
                    water: body.water,
                    light: body.light,
                    stock: body.stock },
                { new: true }
                );

            return updatedPlant;

        }catch{
            return null;            
        }
    },
    decreaseStock: async (id, body) => {
        try{
            const updatedPlant = await PlantModel.findOneAndUpdate(
                { _id: id }, 
                {$inc: { stock: - body.qtt }},
                {new: true}
                );
            return updatedPlant;

        }catch{
            return null;            
        }
    },
    getPlant: async (id) => {

        const plantFound = await PlantModel.find({ _id : id});

        return plantFound;
    },
    getPlantList: async () => {
        const plantList = await PlantModel.find();
        
        return plantList;
    }
}

export default plantService;