import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppProvider.jsx'
import Quotes from './components/Quotes.jsx'
import QuotesAuthor from './components/QuotesAuthor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <div className='flex flex-col items-center justify-center '>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/quotes' element={<Quotes />} />
            <Route path='/quotes/:author' element={<QuotesAuthor />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
)
