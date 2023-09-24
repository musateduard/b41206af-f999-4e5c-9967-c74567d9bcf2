import './index.scss';
import ReactDOM from 'react-dom/client';
import React, { ReactElement } from 'react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const html: ReactElement =
    <React.StrictMode>
        <App />
    </React.StrictMode>

root.render(html);
