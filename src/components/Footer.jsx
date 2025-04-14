import React from 'react'
import styles from '../styles/Nav.module.css'
export default function Footer() {
  return (
    <>
    <div className={styles.fooIcons}>
    <i className='fa fa-facebook'></i>
    <i className='fa fa-twitter'></i>
    <i className='fa fa-youtube'></i>
    <i className='fa fa-linkedin'></i>
    <i className='fa fa-pinterest'></i>


    </div>
    <div className={styles.fooContainer}>
        <div className={styles.fooSec1}>
            <p className={styles.fooHeading}>Key references</p>
            <p>Corp policies</p>
            <p>Ethics & Compliance</p>
            <p>Corporate security</p>
        </div>
        <div className={styles.fooSec1}>
            <p className={styles.fooHeading}>Explore</p>
            <p>Benefits & wellbeing</p>
            <p>Human resources</p>
            <p>Careers</p>
        </div>
        <div className={styles.fooSec1}>
            <p className={styles.fooHeading}>About Company</p>
            <p>Agenda</p>
            <p>Diversity</p>
            <p>Culture & Values</p>
        </div>
        <div className={styles.fooSec1}>
            <p className={styles.fooHeading}>Our Offerings</p>
            <p>Comm Services</p>
            <p>Engagement</p>
            <p>Directory</p>
        </div>
    </div>
    </>

  )
}
