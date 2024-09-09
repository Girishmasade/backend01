import { app } from './app.js';
import {connectDB} from './db/dbConfig.js';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on the server: ${process.env.PORT} `);
    })
})
.catch((err) => {
    console.log('MongoDB connection is Failed', err);
})