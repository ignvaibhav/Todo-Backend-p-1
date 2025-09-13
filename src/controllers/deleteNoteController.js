import { Note } from "../model/note.model.js";

const deleteNote = async (req,res) => {
    try {
        const {title} = req.body;
        if(!title){
            return res.status(400).json({
                message: "Title is required to delete notes"
            })
        }

        const deletedNote = await Note.findOneAndDelete({title})
        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found with given title"});
        }else{
            return res.status(200).json({
                message: "Note deleted"});
        }

    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error });
    }
}

export default deleteNote;