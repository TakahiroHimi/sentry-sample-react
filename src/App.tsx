import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throw new Error("Error！");
        }}
      >
        throwError
      </button>
    </>
  );
}

export default App;
