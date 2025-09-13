import express from 'express';
import getNotes from '../controllers/getNotesController.js';
import createNote from '../controllers/createNoteController.js';
import updateNote from '../controllers/updateNoteController.js';
import deleteNote from '../controllers/deleteNoteController.js';

const dashboardRoute = express.Router();

//defined ROUTES
dashboardRoute.get('/', getNotes);
dashboardRoute.post('/createnote', createNote);
dashboardRoute.put('/updatenote', updateNote);
dashboardRoute.delete('/deletenote', deleteNote);


export default dashboardRoute;