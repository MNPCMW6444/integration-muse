import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MuseClient } from "muse-js";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onClick={async () => {
            let client = new MuseClient();
            await client.connect();
            await client.start();
            client.eegReadings.subscribe((reading) => {
              axios.post("https://a-final-project.herokuapp.com/" + "save", {
                stringifid: JSON.stringify(reading),
              });
            });
          }}
        >
          click here to connect{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
