import React, {  useState} from 'react';


let kosul
function Counter() {

    const [count, setCount] = useState(0);

  return (
    <div>
      <h2>you clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>
        click me </button>

        <button onClick={() => setCount(count - 1)}>
        click me </button>

    </div>
  );
}

export default Counter;