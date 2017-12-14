const express = reqiure('express');
const bodyParser = reqiure('body-parser');
const massive = reqiure('massive');
const cors = reqiure('cors');
const controller = require('./products_controller');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
}).catch()

app.post('/api/product', controller.create)
app.get('/api/products', controller.getAll)
app.get('/api/product/:id', controller.getOne)
app.put('/api/product/:id', controller.update)
app.delete('/api/product/:id', controller.delete)

const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port} <(^_^)^`));