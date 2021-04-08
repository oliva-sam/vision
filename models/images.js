const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//// need to modify with the images 
const imagesSchema = new Schema(
    {
        url: {
            type: String,
            trim: true,
        },
        icon: {
            type: String,
        },
        title:{
            type: String,
        },
        tasks:{
            type: String,
        },
    }
);

const Images = mongoose.model("Images", imagesSchema);

module.expoprts = Images;