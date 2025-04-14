import React from 'react'
import stylesLayout from '../styles/Layout.module.css'
import { useState } from 'react';
import TodoCard from './TodoCard';

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

function ToDo() {
  // const todoList = [
  //   { id: 1, todo: "Software to be installed" },
  //   { id: 2, todo: "Set up project folder structure" },
  //   { id: 3, todo: "Create reusable button component" },
  //   { id: 4, todo: "Write README for GitHub project" },
  //   { id: 5, todo: "Implement responsive navbar" },
  //   { id: 6, todo: "Push initial commit to GitHub" },
  //   { id: 7, todo: "Optimize images for landing page" },
  //   { id: 8, todo: "Fix footer layout issue" },
  //   { id: 9, todo: "Test UI on mobile devices" },
  //   { id: 10, todo: "Deploy project on Netlify" },
  // ];

  return (
    <div className={stylesLayout.todoMainLayout}>
      <h3>Quick To-Dos</h3>
      <div className={stylesLayout.todoLayout}>
        <TodoCard todoList={todoList}
        from="main"/>
      </div>
    </div>
  )
}
export default ToDo