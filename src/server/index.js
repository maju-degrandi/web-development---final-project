import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

// Routes
import plantRouter from "./routes/plant-router.js"
import userRouter from "./routes/user-router.js"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Routers
app.use(plantRouter);
app.use(userRouter);

const PORT = 8080;
mongoose.connect(process.env.CONN_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});