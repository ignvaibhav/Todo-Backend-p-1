import {Note} from "../model/note.model.js"

const updateNote = async(req, res) => {
    try {
        const {title, completed} = req.body;
        if(!title){
            return res.status(400).json({
                message: "Title is required to update notes"
            })
        }

        const updatedNote = await Note.findOneAndUpdate(
            {title},
            {completed},
            {new: true, runValidators: true}
        )

        if(!updatedNote){
            return res.status(400).json({
                message: "Note not found"
            })
        }

        return res.status(200).json({
            message: "Note updated successfully"
        })

    } catch (error) {
        return res.status(500).json({
                message: "Server error", error
        })
    }
}

export default updateNote