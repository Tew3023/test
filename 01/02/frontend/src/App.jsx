import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [username, serUsername] = useState("");
  const [password, serPassword] = useState("");


  const loginProcess = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/login", {
        user: username,
        pass: password,
      });
      if (result.status === 200) {
        alert(result.data.status);
      } else {
        alert("Invalid username or password!");
      }
    } catch (err) {
      alert("Something went wrong during login. Please try again.");
      console.error("Login error:", err);
    }
  };



  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1 style={{ textTransform: "uppercase" }}>login</h1>
        <form onSubmit={loginProcess}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label style={{ textAlign: "left" }} htmlFor="">
              username
            </label>
            <input
              onChange={(e) => serUsername(e.target.value)}
              value={username}
              type="text"
            />
            <label style={{ textAlign: "left" }} htmlFor="">
              password
            </label>
            <input
              onChange={(e) => serPassword(e.target.value)}
              type="password"
              value={password}
            />
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
