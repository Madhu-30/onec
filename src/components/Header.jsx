import React from 'react'
import styles from '../styles/Nav.module.css'
import {NavLink, useNavigate} from "react-router-dom"

export default function Header() {

    // const navigate = useNavigate();

    // const handleClickTodo = () => {
    // }
  return (
    <div className={styles.navbarContainer}>
        <nav className={styles.navbar}>
            <div className={styles.navSec1}>
                <img src="null" alt='logo'/>
                <NavLink className={styles.navSec1Home} to="/">My Learning Studio</NavLink>
            </div>
            <div className={styles.navSec2}>
                <NavLink to="/quickaccess">Quick Access</NavLink>
                {/* <a href="#todoSection">My To-dos</a> */}
                <NavLink to="/todos">My ToDos</NavLink>
            </div>
            <div className={styles.navSec3}>
                <input type='text' placeholder='Search the site'/>
                <i className='fa-regular fa-bell' ></i>
                <i className='fa-regular fa-envelope'></i>
                <i className='fa-solid fa-circle-user'></i>
            </div>
        </nav>
    </div>
  )
}
