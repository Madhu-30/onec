import React from 'react'
import { useState } from 'react';
import styles from '../styles/Card.module.css'

export default function TodoCard({todoList, from}) {
    const [todos, setTodos] = useState(todoList);

      const handleClick = (id) => {
        alert("Task has been marked as completed")
        console.log('to be deleted')
        const updatedList = todos.filter(item => item.id !== id)
        setTodos(updatedList)
        console.log(updatedList)
      }
  return (
    <>
        {todos.map(item => {
          // {console.log(item.id)}
          return(
            <div className={styles.todoCard} key={item.id}>
            {from === "main" && (
            <div className={styles.todoImage}>
              {/* <img src={item.icon} alt="todo icon" /> */}
            </div>
          )}
            {/* <div className={styles.todoImage}>
            </div> */}
            <div className={styles.todoContent}>
              <p className={styles.todoName}>{item.todo}</p>
              <p className={styles.todoStatus} onClick={() => handleClick(item.id)}>Mark as completed</p>
            </div>
            </div>

          );
      })}
    </>
  )
}
