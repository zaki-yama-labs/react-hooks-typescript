import React, { useState } from "react";

export const ExampleWithManyStates: React.FC = () => {
  // Declare multiple state variables;
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState({ text: "Learn Hooks" });

  return (
    <div>
      <p>You age: {age}</p>
      <button onClick={() => setAge(age + 1)}>age++</button>
      <p>Your favorite fruit:</p>
      <select value={fruit} onChange={e => setFruit(e.target.value)}>
        <option value="banana">バナナ</option>
        <option value="apple">りんご</option>
        <option value="orange">みかん</option>
      </select>
    </div>
  );
};
