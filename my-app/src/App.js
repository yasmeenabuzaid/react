
import React, { useState } from 'react';
import App from './index2'; 
import  MyComponent from './userEffect'; 

function Home() {
  const [counter, setCounter] = useState(0); 

  const handleClick = () => { 
    setCounter( counter + 1);

    const newCounter = counter + 1; 
    console.log(newCounter); 
  };
  const handleClean =() =>{
    setCounter(0);
  }
const handleN=()=>{
  setCounter(counter - 1);
}
  return (
    <main>
      <App />
      <MyComponent/>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleN}>(-)</button>
      <button onClick={handleClean}>clean</button>

    </main>
  );
}

export default Home;
