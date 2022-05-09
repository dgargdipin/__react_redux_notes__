import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

const root = ReactDOM.createRoot(
    document.getElementById("app")
);

root.render(
    <AppRouter/>
);
