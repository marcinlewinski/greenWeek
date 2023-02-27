import "./App.css";
import Header from "./components/header/Header";
import Ideas from "./components/Ideas";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import About from "./components/About";

import { useState } from "react";

function App() {
  const [content, setContent] = useState(<Welcome/>);
  const [menuChoices, setMenuChoices] = useState([
    {elemet:<Welcome/>, text:'WELCOME', active:false}, 
    {elemet:<Ideas/>, text:'IDEAS', active:false}, 
    {elemet:<About/>, text:'ABOUT US', active:false}, 
    {elemet:<Contact/>, text:'CONTACT', active:false}
  ]);

  function changePage(event) {
    const newChoices = [...menuChoices];
    newChoices.forEach(choice => choice.active = false);
    const choice = newChoices.find(choice => choice.text === event.target.textContent);
    choice.active = true;
    setContent(choice.elemet);
    setMenuChoices(newChoices);
  }
  
  return (
    <div className="App">
      <Header menuChoices={menuChoices} changePage={(e) => changePage(e)} />
      <div id="content">
        { content }
      </div>
    </div>
  );
}

export default App;
