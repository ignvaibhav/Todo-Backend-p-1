import {Note} from "../model/note.model.js"

export default async function createNote(req,res) {
    try{
        const {title, description} = req.body;

        if(!title || !description){
            return res.status(400).json({
                message:"All the fields are required!"
            })
        }
        const note = new Note({title, description})
        await note.save()

        // console.log(note.title);
        // console.log(note.description);
        return res.status(200).json({
            message: "Note created Sucessfully", note
        })
        
    }catch(error){
        return res.status(500).json({
            message: "Server error", error
        })
    }
}