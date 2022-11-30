import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes } from './Routes'

import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes/>      
    </BrowserRouter>
)
