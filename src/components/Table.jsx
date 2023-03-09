import React from "react";
import "./table.scss"

const Table = ({data}) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
