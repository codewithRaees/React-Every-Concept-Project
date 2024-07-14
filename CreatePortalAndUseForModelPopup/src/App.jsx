import { useState } from "react";
import "./App.css";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [ismodal, setIsModal] = useState(false);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <h1>Heading in its parent di</h1>
      <Modal ismodal={ismodal} setIsModal={setIsModal} />
      {createPortal(
        <>Text Shown Separate Div using CreatePortal</>,
        document.querySelector("#portaltesting")
      )}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
