import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
import { Header } from "./Header";

function App() {
  const count = useSelector((state) => state.counter.value);
  // console.log(count);
  const dispatch = useDispatch();
  return (
    <>
      hola
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Header />
    </>
  );
}

export default App;
