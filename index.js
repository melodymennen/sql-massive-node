const express = reqiure('express');
const bodyParser = reqiure('body-parser');
const massive = reqiure('massive');
const cors = reqiure('cors');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
}).catch()

const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port} <(^_^)^`));