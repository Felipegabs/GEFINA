import { Router } from 'express';

const router = Router();

import invoices from './invoice.data.ts'; './invoice.data.ts';

router.get('/', (_request, response) => {
  response.status(200).json(invoices);
});

router.get('/:id', (request, response) => {
  const id = +request.params.id;
  for (let i = 0; i < invoices.length; i++) {
    if (invoices[i].id === id) {
      response.status(200).json(invoices[i]);
      return;
    }
  }
  response.status(404).json({
    error: {
      message: 'fatura não encontrada',
    },
  });
});
export default router;
