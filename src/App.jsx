import Intro from "./components/Intro/intro";
import NavBAr from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";


function App() {
  return (
    <div className="App">
    <NavBAr/>
    <Intro/>
    <Skills/>
    <Works/>
    </div>
  );
}

export default App;
