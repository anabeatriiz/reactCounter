import React, {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
          <div className="container">
        <h1 className="title_container">Counter</h1>

    <div class="box_container">
      <button className="buttons" onClick={() => setCount(count == 0 ? 0 : count - 1)}>-</button>
      <div className="number_first">{count}</div>
      <button className="buttons" onClick={() => setCount(count + 1)}>+</button>
  </div>

    <div className="box_button">
      <button className="button_effect" onClick={() => setCount(0)}>
        Reset
      </button>

      <button className="button_effect randombtn" onClick={() => setCount(Math.floor(Math.random() * 50))}>
        Random
      </button>
    
    </div>
  </div>
</div>
  );
}

export default App;
