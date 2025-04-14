import React from 'react'
import News from './News'
import Posts from './Posts'
import ToDo from './ToDo'
import Courses from './Courses'
import styles from '../styles/Layout.module.css'
import Domains from './Domains'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddToDo from './AddToDo'


function MainContainer() {
  return (
      <div className={styles.layout}>
        <Domains/>   
      <div className={styles.layout1}>
        <Posts/>
        <Courses/>
      </div>
      <ToDo/>
      {/* <section id='todoSection'>
        <ToDo/>
      </section> */}
      </div>
  )
}
export default MainContainer;