const express = require('express');
const { getTalker } = require('./helper/helpers');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const dataTalker = await getTalker();
  res.status(HTTP_OK_STATUS).json(dataTalker);
});

app.listen(PORT, () => {
  console.log('Online');
});
