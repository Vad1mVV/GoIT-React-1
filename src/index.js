import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App'; 
import './index.css';
import userData from 'user.json';
import statsData from 'data.json';
import friendsData from 'friends.json';
import transactions from 'transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App userData={userData} statsData={statsData} friendsData={friendsData} transactions={transactions} />
  </React.StrictMode>
);
