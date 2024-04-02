import { About } from "./components/AboutMe/About";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
      </BrowserRouter>
    </div>
  );
}

export default App;
