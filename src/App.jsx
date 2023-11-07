import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./todoform";
import SignIn from "./Signin";

function App() {
  return (
    <div
      style={{
        // background: "red",
        width: "100vw",
        height: "100 vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* {{
        // background: "red",
        width: "100vw",
        height: "100 vh",
        display: "flex",
        justifyContent: "center",
      }} */}
      <TodoForm />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
