import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Components/Sections/Aboutus/Aboutus';

function App() {
  return (
    <div className="App-wrapper">
      <Navbar />
      <Aboutus />
    </div>
  );
}

export default App;
