import './App.css'

import {Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hello World !</h1> }></Route>
        <Route path='/api' element={<h1>Free APIs</h1>}></Route>
    </Routes>
    </>
  )
}

export default App
