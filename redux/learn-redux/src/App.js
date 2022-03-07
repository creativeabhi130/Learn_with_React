import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./Actions";

function App() { 
  // whenever we want to install any node module npm i followed by the name of the module
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
  <>
  <div className="App">
    <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    <button>-</button>

    {isLogged ? <h3> for authorized personel only </h3> : " "}

  </div>
 </>
      
  );
}

export default App;
