import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState("");

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    setUser(data.name);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <p>{user}</p>
    </>
  );
};

export default App;
