import styles from "./Todo.module.css"

export const TaskCalculation = ({todoList, setTodoList})=>{
const total = todoList.length
const done = todoList.filter(({marked})=>marked).length
const notDone= total-done;

const clearAll=()=>{
    setTodoList([]);
}
return(
        <div>
        <p>Number of tasks:{total}</p>
        <p>Done: {done} </p>
        <p>Undone:{notDone}</p>
        <button className ={styles.button} onClick={clearAll}>Clear all</button>
        </div>
    )
}