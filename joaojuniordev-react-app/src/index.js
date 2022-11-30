import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'

import { BrowserRouter, Routes } from './Routes'
import Layout from './components/Template/Layout'
// import store from './store'

import './styles/global.css'
import styleConfig from './data/customize/style.json'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <Provider store={store}>
    <BrowserRouter>
      <Layout style={styleConfig.customize1}>
        <Routes/>
      </Layout>
    </BrowserRouter>
  // </Provider>
)
