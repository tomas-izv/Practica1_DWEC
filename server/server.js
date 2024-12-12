import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

let cardState = {}; 

app.use(cors()); 
app.use(express.json());

app.get('/getCardState', (req, res) => {
    res.json(cardState);
});

app.post('/saveCardState', (req, res) => {
    cardState = req.body;
    res.sendStatus(200);
});

app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'));
