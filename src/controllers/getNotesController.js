import { Note } from "../model/note.model.js";

const getNotes = async (req,res) => {
    try {
        const notes = await Note.find().select("title description completed");
        console.log("All notes fetched sucessfully");
        
        return res.status(200).json({
            notes
        })

    } catch (error) {
        res.status(500).json({
            message: "Error fetching notes", error
        })
    }    
}

export default getNotes;