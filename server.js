import app from './src/app.js';
import dotenv from "dotenv";
import connectDB from './src/util/db.js';

dotenv.config();
connectDB();
const PORT = process.env.PORT || 8080;


app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`);
})