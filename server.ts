//GEFINA

import express from 'express';

import invoices from './indice.route.ts';

const app = express();

app.use((request, _response, next) => {
  console.log(`${request.method} ${request.url}`);
  next();
});
app.get('/api/health', (_request, response) => {
  // send(response, 200, {status: 'ok'});
  response.status(200).json({ status: 'ok' });
});

app.use('/api/invoices', invoices);

app.use((_request, response) => {
  response.status(404).json({ message: 'recurso não encontrado.' });
});

app.listen(3000);
