import React from 'react';
import { createRoot } from 'react-dom/client'; // Измените импорт
import DataTable from "./components/DataTable";
import { columns, data } from './Data';

const App = () => {
  return (
    <div>
      <h1>Referrals - 345</h1>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
};

const root = document.getElementById('root');
const rootElement = createRoot(root); // Используйте createRoot

rootElement.render(<App />);