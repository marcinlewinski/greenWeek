import "./App.css";
import Header from "./components/header/Header";
import Ideas from "./components/ideas/Ideas";
import Workshops from "./components/workshops/Workshops";
import Welcome from "./components/welcome/Welcome";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

import { useEffect, useState } from "react";

function App() {
  const [menuChoices, setMenuChoices] = useState([
    { element: <Welcome onSolutionClick={() => changePage('IDEAS')} />, text: "WELCOME", active: true},
    { element: <Ideas />, text: "IDEAS", active: false },
    { element: <Workshops />, text: "WORKSHOPS", active: false },
    { element: <About />, text: "ABOUT US", active: false },
    { element: <Contact />, text: "CONTACT", active: false },
  ]);
  const [content, setContent] = useState(findContent());
  
  useEffect(()=> {
    const choice = menuChoices.find((choice) => choice.element === content);
    const newChoices = [...menuChoices];
    newChoices.forEach((choice) => (choice.active = false));
    newChoices.find((choice) => choice.element === content).active = true;
    setMenuChoices(newChoices);
    sessionStorage.setItem("currentContent", menuChoices.find(choice => choice.active).text);
  }, [content]);

  function findContent() {
    const text = sessionStorage.getItem("currentContent");
    return menuChoices.find((choice) => (text === null) ? choice.active : choice.text === text).element;
  }

  function changePage(text) {
    setContent(menuChoices.find((choice) => choice.text === text).element);
  }

  return (
    <div className="App">
      <Header menuChoices={menuChoices} onLogoClick={() => changePage('WELCOME')} changePage={(e) => changePage(e.target.textContent)} />
      <div id="content">{content}</div>
    </div>
  );
}

export default App;
