import * as express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Running on ", PORT));

import defaultRouter from './routes/default.router';
import movieRouter from './routes/movie.router';

app.use('/',defaultRouter);
app.use('/api/movies',movieRouter);
