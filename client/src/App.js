import React, { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);

  // fetch from api
  fetch("http://localhost:5000/getData")
    .then((res) => res.json())
    .then((data) => setUsers(data));
  return (
    <div style={{ textAlign: "center" }}>
      {users.map((user) => (
        <>
          <li>{user?.name}</li>
          <small>{user.address?.city}</small>
        </>
      ))}
    </div>
  );
}

export default App;
