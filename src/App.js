

import { Appprovider } from './Context';
import Navbar from './Navbar';
import About from './About'

function App() {

  return (
    <Appprovider>
    <div className="">
        <Navbar />
        <About />
      </div>
    </Appprovider>
  );
}

export default App;
