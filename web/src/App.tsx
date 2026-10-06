import InvoiceTable from "./InvoiceTable.tsx";
import { Invoice } from "./invoiceType.ts";
import { useState, useEffect } from 'react';

export default function App() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
const [error, SetError] = useState<string | null>(null);
const[loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInvoices() {
      try {

        const response = await fetch('/api/invoices')
        if (!response.ok)
          SetError('Não foi possivel carregar faturas')

        const datas = await response.json();
        setInvoices(datas);

      } catch {
         SetError('Não foi possivel carregar faturas')
      }
setLoading(false);
    }

    getInvoices()
  }, []);

  if (loading) return <p>Carregando faturas...</p>;
  if (error) return <p>{error}</p>;
  return <InvoiceTable invoices={invoices} />
}
