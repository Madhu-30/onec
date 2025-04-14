import React from 'react'
import {useState} from 'react'
import styles from '../styles/Card.module.css'
import stylesLayout from '../styles/Layout.module.css'
export default function Courses() {
  const progress = 33;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={stylesLayout.courseslayout}>
      <div className={styles.courseCard1}>
        <div className={styles.courseCard1Div1}>
        <p style={{fontSize:"large",fontWeight:"bold"}}>Skill Up Goal Progress</p>
        <p style={{fontSize:"smaller"}}>You have completed 1 of 3 goals</p>
        </div>
        <div className={styles.courseCard1Div2}>
        <progress value={progress} max={100}></progress>
        <p>{progress}%</p>
        </div>
        <div className={styles.courseCard1Div3}>
        <p>View Your Goals</p>
        <p>Connect with people</p>
        </div>

      </div>
      <div className={styles.courseCard2}>
        <p>Assigned to Project : Offshore ABC Accounts</p>
        {showDetails && (
        <p className={styles.courseCard2Content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita. Quia, quod rerum enim similique autem, necessitatibus itaque dolor velit dicta magnam veniam perspiciatis officia tenetur cupiditate perferendis vero dolorem!</p>
        )
        }
        <div className={styles.courseCard2Div1}>
        <button
        onClick={()=>{
          setShowDetails(true)
        }}>Details</button>

        <button
        onClick={()=>{
          setShowDetails(false)
        }}
        >Hide</button>
        </div>

      </div>


      <div className={styles.courseCard3} >
        <p style={{fontSize:"large",fontWeight:"bold"}}>My Learning Insights</p>
        <div className={styles.courseCard3Div1}>
        <div className={styles.courseCard3Div2}>
        <p>{`${Math.floor(Math.random() * 5) + 1}`} </p>
          <p>Development Plan courses</p>
        </div>
        <div className={styles.courseCard3Div2}>
        <p>{`${Math.floor(Math.random() * 15) + 1}`} </p>
          <p>Assigned courses</p>
        </div>
        <div className={styles.courseCard3Div2}>
        <p>{`${Math.floor(Math.random() * 10) + 1}`} </p>
        <p>Others</p>
        </div>
        </div>

        <button>View All</button>
      </div>
    </div>
  )
}
