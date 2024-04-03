
import { useState } from 'react';
import './App.css';
import TodoBox from './components/todobox';

function App() {

  const [inputValue, setInputValue] = useState("")

  const [todoList, setTodoList] = useState([
    { id: 0, todoText: "shoping" },
    { id: 1, todoText: "watching movie" }

  ])


  function btnAdd() {
    setTodoList([...todoList, { id: Date.now() * Math.random(), todoText: inputValue }])
  }



function deleteIt(id){
  setTodoList(todoList.filter(item=>item.id!== id))
}






  return (
    <>
      <div className="w-full h-full bg-[#141414]">
        <h1 className="text-white text-center text-[2rem] sm:text-[2.5rem] pt-1">todo list</h1>

        <div className="w-[85%] md:w-[65%] h-full mx-auto flex justify-center gap-2 rounded-[5px] my-[1.75rem] bg-[#252525] py-[1.25rem]">
          <input className="rounded-[5px] w-[70%] md:w-[55%]" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button className="text-white bg-gray-400 rounded-[5px] p-2" onClick={btnAdd}>add</button>

        </div>





        <div className="todoWrapper">
{todoList.map(item=>(
  <TodoBox id={item.id} deleteFunction={deleteIt} todoText={item.todoText}/>
))}





        </div>

























      </div>






    </>
  );
}

export default App;
