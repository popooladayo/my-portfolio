

import { Appprovider } from './Context';
import Navbar from './Navbar';
import About from './About'
import Skills from './Skills';
import Contact from './Contact';

function App() {

  return (
    <Appprovider>
      <div className="bg-[#0a192f]">
        <Navbar />
        <About />
        <Skills />
        <Contact/>
      </div>
    </Appprovider>
  );
}

export default App;
