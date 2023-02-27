import './App.css';
import Welcome from './components/welcome/Welcome';
import Ideas from './components/Ideas';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Ideas />
      <About />
    </div>
  );
}

export default App;
