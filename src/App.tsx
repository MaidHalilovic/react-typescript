import { useState } from "react";
import "./App.css";
import type { User } from "./interfaces";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Maidh",
      age: 20,
      country: "Serbia",
      adress: {
        street: "ras 7",
        number: 7,
        city: "Novi Pazar",
      },
      admin: false,
    });

  return (
    <>
      <button onClick={fetchUser}>Fetch user on onClick</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
  );
}

export default App;
