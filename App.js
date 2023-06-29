
import './App.css';
import { useState } from 'react';

function App() {


  const [msg, setMsg] = useState("green");
  const [age, setAge] = useState(18);



  const change = () =>{
    setMsg(msg === "green" ? "red" : "green" );
  }

  const addAge = () =>{
    setAge(age + 1);
  }
  const minusAge = () =>{
    setAge(age - 1);
  }



  return (
    <div className="App">
     <h1 style={{color:msg}}>HI THIS IS KARTHIK</h1>
      <button onClick={change}>::CHANGE COLOR::</button>
      <br></br>
    <h1> Your Age is : {age}</h1>
    <button onClick={addAge}>::Add::</button>
    <button onClick={minusAge}>::Minus::</button>

    </div>
  );
}

export default App;
