import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState('');
  const[name,setName] = useState('');

  
 // variaion1-every render
//  useEffect(()=>{
//   console.log("UI rendering done");
//  });

//variation 2- First render
// useEffect( () => {
//   console.log("UI rendering done");
// } ,[]);

//variation-3 > first render + when dependency change
// useEffect (()=>{
//   console.log("change observed");
// },[name])

//variation-4 -> to handle unmounting of a components
useEffect(() => {
  //add event listener
  console.log("listener added");

  return () => {

    console.log("Listener removed");
  }
},[text]);

function changeHandler(event){
  setText(event.target.value);
  console.log(text);    
}

  return (
    <div className="App">
      <input type="text"  onChange={changeHandler}></input>
    </div>
  );
}

export default App;
