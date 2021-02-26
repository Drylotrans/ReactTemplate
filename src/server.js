import express from 'express';
import { join } from 'path';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), (err) => {
    if (err) return console.error(err);
    console.log(`Server listening on port :${app.get('port')}`);
});