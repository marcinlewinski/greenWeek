import './Header.css';
import MenuChoice from "./MenuChoice.js";

function Header({ menuChoices, changePage }) {
  return (
    <div id="header">
      <div id="logo-and-name-wrapper">
        <div id="logo-wrapper">
          <img id="logo" src="/ecological.png" alt="logo"></img>
        </div>
        <div id="ngo-name">GREEN WEEK</div>
      </div>
      <div id="navigation">
        <div id="navbar-wrapper">
          <div id="navbar">
            {menuChoices.map((menuChoice, index) => 
            <MenuChoice key={index} menuChoice={menuChoice} changePage={changePage}/>
            )}
          </div>
        </div>
        <div id="bar-icon-wrapper">
          <img id="bar-icon" src="/menu.png" alt="menu-icon"></img>
        </div>
      </div>
    </div>
  );
}
export default Header;
