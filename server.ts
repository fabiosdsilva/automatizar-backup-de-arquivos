import express, { Request, Response } from 'express';

import index from './src';

const app = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) =>{
    try {
        await index('./txt.txt', './teste.txt');

        return res.json({ message: ['OK'] });
    } catch (error) {
        return res.json(error);
    }
});

app.listen(8081, () =>{
    console.log('Server running');
});