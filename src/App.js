import { useState } from "react";
import "./app.scss";
import { usersData } from "./users";
import Table from "./components/Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["name", "lastName", "email", "gender"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(usersData)} />
    </div>
  );
}

export default App;
