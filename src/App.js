import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Sections/Aboutus/Aboutus';

function App() {
  return (
    <div className="App-wrapper">
      <Navbar />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
