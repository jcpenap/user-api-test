const express = require('express');
const dotenv = require('dotenv').config();

const api = require('./api');
const config = require('./config');
const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://ccb2bbeae94644a6b7d72a8c1a7e76c6@o403576.ingest.sentry.io/5266429' });

const app = express();
app.use(express.json());
app.use('/api', api);

app.get('/', (req, res)=>{
    res
    .sendStatus(500);
});

const server = app.listen(process.env.PORT || config.port, config.host, ()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor iniciado en host ${host} puerto ${port} ...`);
});
