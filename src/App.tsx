import React from "react";
import "./App.css";
import * as Sentry from "@sentry/react";

function App() {
  Sentry.setUser({
    id: "1234",
    username: "hoge",
    email: "hoge@hoge.com",
  });

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
