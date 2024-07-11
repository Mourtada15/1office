import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VirtualOffice from './Components/Packages/VirtualOffice/VirtualOffice';
import Home from './Pages/Home/Home';
import DedicatedDesk from './Components/Packages/DedicatedDesk/DedicatedDesk';
import StartUp from './Components/Packages/Startup/Startup';
import StartUpPlus from './Components/Packages/StartupPlus/StartupPlus';
import SmallBusiness from './Components/Packages/SmallBusiness/SmallBusiness';
import SmallBusinessPlus from './Components/Packages/SmallBusinessPlus/SmallBusinessPlus';
import AOS from 'aos';
import ContactUs from './Pages/ContactUs/ContactUs';
import emailjs from 'emailjs-com';

function App() {
  AOS.init();
  emailjs.init('KtvbtfVSIePHjDZjf');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtualoffice" element={<VirtualOffice />} />
        <Route path="/dedicateddesk" element={<DedicatedDesk />} />
        <Route path="/startup" element={<StartUp />} />
        <Route path="/startupplus" element={<StartUpPlus />} />
        <Route path="/smallbusiness" element={<SmallBusiness />} />
        <Route path="/smallbusinessplus" element={<SmallBusinessPlus />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
