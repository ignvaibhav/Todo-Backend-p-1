import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description : {
        type: String,
        required: true
    }, 
    completed : {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true})


export const Note = mongoose.model("Note", noteSchema)