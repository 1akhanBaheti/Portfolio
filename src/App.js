import Header from './Header/header.js';
import './Styles/homepage.css'
import Homepage from './Blocks/Homepage.js';
import About from './Blocks/About.js';
import Work from './Blocks/Work.js';
import Contact from './Blocks/Contact.js';
import Project from './Blocks/Projects.js';
function App() {
  return (
    <> 
    <Header />
    <Homepage/>
    <About />
    <Work/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;
