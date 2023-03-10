import express, {Express,Request,Response} from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app:Express = express();

app.use(helmet());
app.use(express.json());


app.get('/',(req:Request,res:Response)=>{
    res.send('<h1>Welcome to the world of Typescript with Node.js and Express</h1>');
});

app.listen(PORT,()=> console.log(`Running on port ${PORT}`) );