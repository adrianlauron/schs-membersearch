import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser'
import cors from 'cors';

import { config } from './config/config'; 
import { MemberRoute } from './routes/member.route';

const app = express()

const options: cors.CorsOptions = {
    origin: config.development.allowedOrigins
}

app.use(cors(options))
app.use(json())

const memberRoute = new MemberRoute(app);

mongoose.connect(config.development.db)
.then(result => 
    app.listen(config.development.port, () => {
        console.log('server is listening to port 3000')
    })
)