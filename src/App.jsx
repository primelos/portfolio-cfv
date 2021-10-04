import React from "react";
import "./App.css";
import Routes from "./myRoutes/Routes";
import { FormspreeProvider } from "@formspree/react";

function App(props) {
  return (
    <FormspreeProvider project="1771700540435069968">
      <div className="App">
        <Routes />
      </div>
    </FormspreeProvider>
  );
}

export default App;

// less-watch-compiler less src index.less
