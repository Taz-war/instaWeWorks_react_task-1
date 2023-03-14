import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // [{}, {}]
  const [counter, setCounter] = useState(0); // counter = 1 // counter = 2
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    console.log("hello useEffect");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "data");
        setTodos(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="user">
        <h1>User</h1>
        <nav>
          <input placeholder="search User"></input>
          <ul>
            <li className="typeOfuser">Reputation</li>
            <li className="typeOfuser">New users</li>
            <li className="typeOfuser">Voters</li>
            <li className="typeOfuser">Editors</li>
            <li className="typeOfuser">Moderators</li>
          </ul>
        </nav>
        <div className="card-container">
          {todos.map((item) => (
            <div className="card">
              <div className="user_image">
                <img src="data:image/jpeg;base64,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" />
              </div>
              <div className="user-name">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item?.company?.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* container */}
      {/* <button onClick={upDateCounter}>Increase Counter</button> */}
    </div>
  );
}

/**
 * 1) state ba props change -> Component Rerun -> ReRender
 */
export default App;

{
  /* <h2>
          All Todos
        </h2>
        <ul>
          {todos?.map((item) => (
            <li key = {item.id}>
              {item.name}
            </li>
          ))}
        </ul> */
}
