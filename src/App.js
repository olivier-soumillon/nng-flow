import React from 'react'
import Content from './Content'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
    <Content />
    <ToastContainer autoClose={2000} closeButton={false} hideProgressBar newestOnTop />
    </>
  )
}

export default App