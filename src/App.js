import './App.css';
import Header from './components/header/Header';
import Ideas from './components/ideas/Ideas';
import Workshops from './components/workshops/Workshops';
import Welcome from './components/welcome/Welcome';
import Contact from './components/contact/Contact';
import About from './components/about/About';

import { useState } from 'react';

function App() {
  const [content, setContent] = useState(<Welcome onSolutionClick={() => setIdeasTabActive()} />);
  const [menuChoices, setMenuChoices] = useState([
    { elemet: <Welcome onSolutionClick={() => setIdeasTabActive()} />, text: 'WELCOME', active: false },
    { elemet: <Ideas />, text: 'IDEAS', active: false },
    { elemet: <Workshops />, text: 'WORKSHOPS', active: false },
    { elemet: <About />, text: 'ABOUT US', active: false },
    { elemet: <Contact />, text: 'CONTACT', active: false },
  ]);
  
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
    const choice = newChoices.find((choice) => choice.text === event.target.textContent);
    choice.active = true;
    setContent(choice.elemet);
    setMenuChoices(newChoices);
  }

  return (
    <div className="App">
      <Header menuChoices={menuChoices} changePage={(e) => changePage(e)} />
      <div id="content">{content}</div>
    </div>
  );
}

export default App;
