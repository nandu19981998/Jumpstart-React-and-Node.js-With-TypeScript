import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
