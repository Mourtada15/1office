import { Carousel } from 'bootstrap';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Sections/Aboutus/Aboutus';
import General from './Components/Sections/General/General';
import GeneralOne from './Components/Sections/GeneralOne/GeneralOne';

function App() {
  return (
    <div className="App-wrapper">
      <Navbar />
      <div className='app-wrapper-body'>
        <Aboutus />
      </div>
      <General />
      <GeneralOne />
      <Footer />
    </div>
  );
}

export default App;
