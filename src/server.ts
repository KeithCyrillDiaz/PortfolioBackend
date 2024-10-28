
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import router from './router';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import colors from 'colors'
import { MessageLog } from './constants/consoleLogsFunction';
import { insertDefaultTechnicalSkills } from './models/InsertDefaultData/TechnicalSkills.InsertDefaultData';
import { insertDefaultTeamProjects } from './models/InsertDefaultData/TeamProjects.InsertDefaultData';

colors.enable();

dotenv.config()

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())

const server = http.createServer(app)

app.get ("/", (req, res) => {res.json("Portfolio Backend")})

const MongDB_URL = process.env.MONGO_DB_ATLAS

if (!MongDB_URL) {
    throw new Error("MongoDB URL is not defined");
}

server.listen(7000,() => {
        MessageLog.Ready("Server Running on http://localhost:7000")
    if(MongDB_URL === process.env.MONGO_DB_LOCAL)
        MessageLog.Ready("MongoDB is running at localhost")
    else 
        MessageLog.Ready("MongoDB is running at Atlas")
});

mongoose.Promise = Promise;
mongoose.connect(MongDB_URL).then( async () => {
    MessageLog.Ready("MongoDB is Connected");
    //to set default value skills
    await insertDefaultTeamProjects()
    await insertDefaultTechnicalSkills()
});
mongoose.connection.on('error', (error: Error) => console.log(error));


app.use('/', router());


export default app;