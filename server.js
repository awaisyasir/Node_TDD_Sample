import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ 'message': 'Hello World' });
})

app.get('/ping', (req, res) => {
  res.status(200).json({ 'message': 'pong' });
})

export const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(4000, () => { console.log('Listening on Port 4000'); resolve(server); });
  }) 
}