import { useState } from "react";
import "./app.scss";
import { usersData } from "./users";

function App() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {usersData
          .filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
          .map((user) => (
            <li key={user.id} className="listItem">
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
