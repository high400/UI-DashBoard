import kengan from "./kengan.jpg";
import fox from "./fox.svg";
import "./App.css";
import List from "./components/List";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={fox} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.foxnews.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Reading Real News
          </a>
        </header>
        <body className="Body">
          <a
            className="link"
            href="https://w5.kengan-manga.com/"
            target="_blank"
            rel="none"
          >
            Read Kengan Omega
          </a>
        </body>
      </div>
    );
  }
}

export default App;
