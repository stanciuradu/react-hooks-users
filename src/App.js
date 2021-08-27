import React, { useState, useEffect } from "react";
import UserItem from "./components/UserItem";
import { AppContainer } from "./App.jsx";

function App() {
  // se seteaza state-ul initial al aplicatiei si functia de resetare a state-ului
  const [users, setUser] = useState([]);
  // prin useEffect practic se inlocuieste metoda componentDidMount si se face request catre server pentru preluarea datelor catre client
  // useEffect este doar o simpla functie
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);
  return (
    <AppContainer>
      {users.map((user, index) => {
        return (
          <UserItem
            name={user.name}
            username={user.username}
            email={user.email}
            key={index}
          />
        );
      })}
    </AppContainer>
  );
}

export default App;
