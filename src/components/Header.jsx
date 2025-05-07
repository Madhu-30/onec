import React from 'react'
import styles from '../styles/Nav.module.css'
import {NavLink, useNavigate} from "react-router-dom"

export default function Header() {
const navList = [
    {id:1,name:'Home'},
    {id:2,name:'Resources'},
    {id:3,name:'Employee center'},
    {id:4,name:'Workspace'},
    {id:5,name:'Profile'},

]
  return (
    <>
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

        <div className={styles.navList}>
            {navList.map(item => {
                return(
                    <div key={item.id}>
                    <p>{item.name || 'No Title'}</p>
                    {console.log(`hi from here ${item.name}`)}
                    </div>
                )
            })}
        </div>

        {/* <div className={styles.navShape}>
            <p></p>
        </div> */}
    </>

  )
}
