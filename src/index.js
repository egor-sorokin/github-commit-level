import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/stats', routes.stats);


app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}!`),
);

