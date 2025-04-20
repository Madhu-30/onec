import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import QuickAccess from './components/QuickAccess'
import News from './components/News'
import AddToDo from './components/AddToDo'


function App() {

  return (
    <>
    <Header/>
    <News/>
    
    <Routes>
    {/* <Route path="/" element={<Header/>} /> */}
    <Route path="/" element={<MainContainer />} />
    <Route path='/quickaccess' element={<QuickAccess/>}/>
    <Route path='/todos' element={<AddToDo/>}/>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
