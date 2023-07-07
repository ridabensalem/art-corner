import express,{Request, Response} from 'express';
import mongoose from 'mongoose';
const app = express();
let uri='mongodb+srv://ridasbnesalmas:123@ridacluster.nixyljy.mongodb.net/'

// middleware
app.use(express.json());


// Defining blog routes 
app.get('/login', (req : Request, res: Response) => {
    res.send('Hello art corner !');
    
});

// start the Express server
const  PORT = 3000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
// connect to mongoDB
mongoose.connect(uri).then(() => console.log('Connected successfully to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err.message));
