import React, { useState } from 'react'

function Person() {
  /*
  const [name, setName] = useState('Ahmet');
  const changeName = () => {
    setName('Mehmet');

  };*/
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 10);
  };

  if (count > 40) {
    console.log('Count > 40 : '  ,count);
  }


  return (
    <div>
      <h2>{count}</h2>
      <input type="button" value="Inc. Count" onClick={incCount} />
      
    </div>
      
      
  );
  }

export default Person