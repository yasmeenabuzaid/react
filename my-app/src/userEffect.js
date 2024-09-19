import React, { useEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null); 

  const handleClick = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value); 
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default MyComponent;
