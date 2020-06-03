import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bugAdded } from "./store/bugs";

function App() {
  const store = useSelector((bugs) => bugs);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      bugAdded({
        text: "Bug 1",
      })
    );
  };
  return (
    <div>
      <span>bugs :{store.length}</span>
      <br />
      <button onClick={handleClick}> Add bug</button>
    </div>
  );
}

export default App;
