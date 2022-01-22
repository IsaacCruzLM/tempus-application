const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(require('../controllers/root'));

app.use(require('../middlewares/error'));

app.listen(3001, () => console.log('ouvindo porta 3001!'));
