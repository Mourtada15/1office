import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Sections/Aboutus/Aboutus';
import Packages from './Components/Sections/Packages/Packages';

function App() {
  return (
    <div className="App-wrapper">
      <Navbar />
      <div className='app-wrapper-body'>
        <Aboutus />
      </div>
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
