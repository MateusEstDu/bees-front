import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)
root.render(<App />);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/