import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import {getRoutes} from "./routes/get-routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
getRoutes(app);

app.listen(process.env.PORT, () =>{
    console.log(`🟢 Listening on port ${process.env.PORT}`);
})