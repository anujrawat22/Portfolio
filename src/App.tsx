import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import GithubSection from "./components/GithubSection";

import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import MyTools from "./components/MyTools";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className=" font-sora no-scrollbar box-border">
      <Navbar />
      <Home />
      <About />
      <TechStack />
      <MyTools />
      <MyProjects />
      <GithubSection />
      <ContactMe />
    </div>
  );
}

export default App;
