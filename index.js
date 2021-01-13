import express from 'express';
import path from 'path';
import { logger, requestTime } from './middlewares.js';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(requestTime);
app.use(logger);

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'index'});
});

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page', active: 'features'});
});

// app.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname, 'static', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`);
});