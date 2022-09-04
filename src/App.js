

import { Appprovider } from './Context';
import Navbar from './Navbar';
import Home from './Home'
import Skills from './Skills';
import Contact from './Contact';
import About from './About';

function App() {

  return (
    <Appprovider>
      <div className="bg-[#0a192f]">
        <Navbar />
        <Home />
        <About/>
        <Skills />
        <Contact/>
      </div>
    </Appprovider>
  );
}

export default App;
