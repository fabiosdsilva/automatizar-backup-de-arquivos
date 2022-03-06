import express, { Request, Response } from 'express';

const app = express();

// Use
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) =>{ res.send('Ok') });


// Runnig
app.listen(8081, () =>{
    console.log('Server running');
});