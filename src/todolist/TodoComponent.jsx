import React from 'react'
import Style from './Todo.module.css'

export const Todo = ({ title, marked, changeMarked,id, deleteTodo }) => {
  return (
    <div className={marked ? Style.done : ''}>
      <input type="checkbox" checked={marked} onChange={()=>changeMarked(id)}></input>
      <span>{title}</span>
      <button className={Style.button} onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}
