import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <div>
    <header>
      <p>header test</p>
    </header>
    <main>
      <p>main</p>
    </main>
  </div>
</React.StrictMode>);

reportWebVitals();