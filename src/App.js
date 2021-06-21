
import './App.css';
import {useState} from 'react';



function App() {

  const [todos,setTodos] = useState(['aaa aaaa aa a  aa a aa  aaaa aa a aaaaa a aa a aa aa aaaa aa a aa aaaaa aa aaaaaaaaaa a aaaaaaaaa aa aa a aaaaaaaaaaaaaaaaaa aaaaaaa','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']);
  const [currentInput,setCurrentInput] = useState("");
  const [buffer,setBuffer] = useState(false);
  const [reject,setReject] = useState(false);

  const handleText=(event)=>{
    setCurrentInput(event.target.value);
  }

  const newTodo = () => {
    if(currentInput===""){
      setReject(true);
      setTimeout(()=>{
        setReject(false)
      },1000);
      return;
    }
    let x = todos;
    x.unshift(currentInput);
    setTodos(x);
    setCurrentInput("");
    //For user experience
    setBuffer(true)
    setTimeout(()=>{
      setBuffer(false)
    },1000)
  }

  return (
    <div className="App">
      <header>
      <title>Todo</title>
      </header>
      <body>
        <div class="grid gap-2 w-full mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div class="w-full justify-self-start">
            <p class="pl-5 w-full text-left mb-2">WRITE DOWN YOUR TASK</p>
            <div class="px-5 w-full"><input value={currentInput} onChange={handleText} class="pl-1 rounded w-full border-2 h-8 mb-2"></input></div>
            <div class="px-5 cursor-pointer w-full"><div onClick={newTodo} class={reject?"w-full h-8 bg-red-300 rounded text-black pt-1":(buffer?"w-full h-8 rounded bg-gray-100 text-black pt-1":"w-full h-8 bg-blue-500 rounded text-white pt-1")}><p>{reject?"Please enter something":(buffer?"Added":"Add")}</p></div></div>
          </div>
          {
            todos.map((todo,i)=>
            <div class="px-5 w-full">
            <div class="w-full rounded bg-blue-100 leading-4 text-left px-3 py-2" key={i}>
              <p>{todo}</p>
            </div>
            </div>
            )         
          }
        </div>
      </body>
    </div>
  );
}

export default App;
