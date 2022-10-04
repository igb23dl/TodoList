import React, {useState} from 'react'
import '../Styles/todo.css'

function TodoList() {
    const [newItem, setNewItem] = useState("")
    const [todo, setTodo] = useState([]);

    function addItem(){
       const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
       }
       if(newItem === ''){
        alert("Add a todo!");
       } else{
        setTodo(oldList => [...oldList, item]);
       setNewItem("");
       console.log(item);
       }
    }
    function removeItem(id){
        const newArray = todo.filter(item => item.id !== id);
        setTodo(newArray);
    }
  return (
    <div className='box'> 
        <div className='todo_container'>
          <div className='todo'>
            <div className='column_header'>
                TodoList
            </div>
            <div className='column'>
                {todo.map(todos => <div className='todo_item'>{todos.value}<button onClick={() => removeItem(todos.id)} >X</button></div>)}
            </div>
            <div className='addTodo'>
                <input 
                className='input' 
                type='text'
                placeholder='Add a Todo'
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                />
                <button className='todoButton' onClick={addItem}>Add Todo</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TodoList