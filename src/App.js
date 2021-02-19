import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: "GET"
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error({ error });
    }
  }

  async function getPhotos() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`, {
        method: "GET"
      });
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error({ error });
    }
  }

  useEffect(() => {
    getUsers();
    getPhotos();
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Users</h2>
      <ul>
        {users.length !== 0 ?
          users.map((user) => <li key={user.id}>{user.name}</li>)
          : null
        }
      </ul>
      <h2>Photos</h2>
      <ul className="photos-container">
        {photos.length !== 0 ?
          photos.map((photo) =>
            <li className="photo-wrapper" key={photo.url+photo.id}>
              <img className="photo" src={photo.url} alt={photo.title} />
            </li>
          )
          : null
        }
      </ul>
    </>
  );
};

export default App;
