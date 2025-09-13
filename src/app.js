import express from "express";
import cors from "cors";
import dashboardRoute from './routes/dashboardRoute.js';

const app = express();


// Middlewares
app.use(express.json())
app.use(cors())

//Routing

app.use('/api/notes/', dashboardRoute);


export default app;