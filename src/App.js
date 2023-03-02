import "./App.css";
import Header from "./components/header/Header";
import Ideas from "./components/ideas/Ideas";
import Workshops from "./components/workshops/Workshops";
import Welcome from "./components/welcome/Welcome";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

import { useState, useEffect } from "react";

function App() {
  const [menuChoices, setMenuChoices] = useState([
    {
      element: <Welcome onSolutionClick={() => setIdeasTabActive()} />,
      text: "WELCOME",
      active: true,
    },
    { element: <Ideas />, text: "IDEAS", active: false },
    { element: <Workshops />, text: "WORKSHOPS", active: false },
    { element: <About />, text: "ABOUT US", active: false },
    { element: <Contact />, text: "CONTACT", active: false },
  ]);
  const [content, setContent] = useState(findContent());

  function findContent() {
    const text = sessionStorage.getItem("currentContent");
    return text === null ? (
      <Welcome onSolutionClick={() => setIdeasTabActive()} />
    ) : (
      menuChoices.find((choice) => choice.text === text).element
    );
  }

  function setIdeasTabActive() {
    setContent(<Ideas />);
    setMenuChoices((menuChoices) => {
      return menuChoices.map((choice) => {
        if (choice.text === "IDEAS") {
          return { ...choice, active: true };
        }
        return { ...choice, active: false };
      });
    });
  }

  function changePage(event) {
    const newChoices = [...menuChoices];
    newChoices.forEach((choice) => (choice.active = false));
    const choice = newChoices.find(
      (choice) => choice.text === event.target.textContent
    );
    choice.active = true;
    setContent(choice.element);
    setMenuChoices(newChoices);
    sessionStorage.setItem("currentContent", menuChoices.find(choice => choice.active).text);
  }

  return (
    <div className="App">
      <Header menuChoices={menuChoices} changePage={(e) => changePage(e)} />
      <div id="content">{content}</div>
    </div>
  );
}

export default App;
