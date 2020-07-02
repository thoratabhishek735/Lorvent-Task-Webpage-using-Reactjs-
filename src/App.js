import React from "react";

import "./App.css";
import Menu from "./Menu";
import Left from "./Left";
import Right from "./Right";
import No from "./No";
import Home from "./Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Const from "./Constdown";
import Image from "./Image";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Image />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Left" component={Left} />
          <Route path="/Right" component={Right} />
          <Route path="/No" component={No} />
        </Switch>

        <Const />
        <footer className="text-white">
          Design Abhishek Thorat for Lorvent assinment
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
