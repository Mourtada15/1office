import "./Aboutus.css";
import { Link } from "react-router-dom";

const Aboutus = () => {

  return (
    <div className="aboutus-wrapper">
      <div style={{ display: "none" }} >
        <h1 style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}>One Office is a <span style={{ color: '#2f3f92' }}>Co-Working Space</span> in The Heart of Beirut</h1>
        <p style={{ textAlign: 'center', backgroundColor: '#eaecf4', padding: '1rem 0 1rem 0' }}>1O is youir easy access to begin your business. 1O grants you a space suitable for all your business needs. <br />
          At 1O, you have peace of mind regarding major running (Overhead) costs since we provide all the basics free of charge.</p>
      </div>

      <div id="packages" className="aboutus-container" >
        <Link to="/virtualoffice" style={{ width: "150px", height: "150px" }} data-aos="fade-up-left" data-aos-duration="600">
          <img src="digital-assistant.png" alt="" />
          <h5>Virtual Office</h5>
        </Link>

        <Link to="/dedicateddesk" style={{ width: "150px", height: "150px" }} data-aos="fade-up-left" data-aos-duration="700">
          <img src="workspace.png" alt="" />
          <h5>Dedicated Desk</h5>
        </Link>

        <Link to="/startup" style={{ width: "150px", height: "150px" }} data-aos="fade-up-left" data-aos-duration="800">
          <img src="idea.png" alt="" />
          <h5>Startup</h5>
        </Link>

        <Link to="/startupplus" style={{ width: "150px", height: "150px" }} data-aos="fade-up-left" data-aos-duration="900">
          <img src="startup.png" alt="" />
          <h5>Startup+</h5>
        </Link>

        <Link to="/smallbusiness" style={{ width: "150px", height: "150px" }} data-aos="fade-up-left" data-aos-duration="1000">
          <img src="briefcase.png" alt="" />
          <h5>Small Business</h5>
        </Link>

        <Link to="/smallbusinessplus" style={{ width: "150px", height: "150px" }} data-aos="fade-up-left" data-aos-duration="1100">
          <img src="graph.png" alt="" />
          <h5>Small Business+</h5>
        </Link>

      </div>
    </div>
  );
}

export default Aboutus;

