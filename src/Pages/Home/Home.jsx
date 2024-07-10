import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Aboutus from "../../Components/Sections/Aboutus/Aboutus";
import General from "../../Components/Sections/General/General";
import GeneralOne from "../../Components/Sections/GeneralOne/GeneralOne";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
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

export default Home;