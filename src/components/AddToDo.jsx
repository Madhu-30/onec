import { useState } from 'react'
import { useForm } from "react-hook-form"
import ToDo from './ToDo';
import styles from '../styles/Routers.module.css'
import TodoCard from './TodoCard';
function AddToDo() {

  const todoList = [
    { id: 1, todo: "Software to be installed" },
    { id: 2, todo: "Check ticket status" },
    { id: 3, todo: "Submit Timesheet" },
    { id: 4, todo: "Check trutime hours" },
    { id: 5, todo: "Complete courses" },
    { id: 6, todo: "Complete communication video" },
    { id: 7, todo: "Optimize images for landing page" },
    { id: 8, todo: "Fix footer layout issue" },
    { id: 9, todo: "Test UI on mobile devices" },
    { id: 10, todo: "Deploy project" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div className={styles.addtodoContainer}>

      <div className={styles.formLayout}>
      <h3>Add a To-Do Task</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Task to be done : </label>
            <textarea rows={10} cols={30} {...register("todo", 
              { 
                required: true, 
              })} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            <br/>
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
      <h3>My To-Dos</h3>
      <div className={styles.AddtodoTodoLayout}>
        <TodoCard todoList={todoList}
        from="addTodo"/>
        </div>
        </div>


      </div>

  )
}

export default AddToDo
