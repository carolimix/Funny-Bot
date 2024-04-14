import { useState } from "react";
import Jokes from "./components/Jokes";

function App() {
  return (
    <>
      <h1>Jokes 4All</h1>
      <p>You can pick your favorite joke category!</p>
      <span>Let's go!</span>
      <Jokes />
    </>
  );
}

export default App;
