import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import routes from './routes';


const app = express();

// serve static assets normally
const STATIC = path.resolve(__dirname, 'static/build/production');
const INDEX = path.resolve(STATIC, 'index.html');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(STATIC));

/* Routes */
app.use('/stats', routes.stats);
app.use('*', (req, res) => {
    res.sendFile(INDEX);
});

app.listen(process.env.PORT, () =>
    console.log(`Server up and running on http://localhost:${process.env.PORT}!`),
);

