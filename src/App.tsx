import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MuseClient } from "muse-js";
import axios from "axios";

let c = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ fontSize: "10rem" }}
          onClick={() => {
            c = false;
          }}
        >
          stop
        </button>
        <br />
        <button
          style={{ fontSize: "10rem" }}
          onClick={async () => {
            let client = new MuseClient();
            await client.connect();
            await client.start();
            client.eegReadings.subscribe((reading) => {
              if (c) {
                axios.post("https://a-final-project.herokuapp.com/" + "save", {
                  stringified: JSON.stringify(reading),
                });
              }
            });
          }}
        >
          start
        </button>
      </header>
    </div>
  );
}

export default App;
