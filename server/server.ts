import express from "express";
import { mainRouter } from "./router/mainRouter";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/tasks", mainRouter)
app.listen(3000, ()=>{
    console.log(`http://localhost:3000/`);
});