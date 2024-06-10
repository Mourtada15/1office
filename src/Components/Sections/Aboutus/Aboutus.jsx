import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus-wrapper">
      <div>
        <h1 style={{ textAlign: "center" }}>One Office is a Co-Working Space in The Heart of Beirut</h1> 
        <p style={{ textAlign: 'center' }}>1O is youir easy access to begin your business. 1O grants you a space suitable for all your business needs.
          At 1O, you have peace of mind regarding major running (Overhead) costs since we provide all the basics free of charge.</p>
      </div>

      <div className="aboutus-container">
        <div>
          <img src="conversation.png" alt="" />
          <h5>Consultancy</h5>
        </div>

        <div>
          <img src="customize.png" alt="" />
          <h5>Fully Customizable</h5>
        </div>

        <div>
          <img src="brand.png" alt="" />
          <h5>Branding</h5>
        </div>

        <div>
          <img src="consistency.png" alt="" />
          <h5>Consistency</h5>
        </div>

        <div>
          <img src="customer-service.png" alt="" />
          <h5>Sales Support</h5>
        </div>

      </div>
    </div>
  );
}

export default Aboutus;