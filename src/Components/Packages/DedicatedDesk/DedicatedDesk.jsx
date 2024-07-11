import "./DedicatedDesk.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const DedicatedDesk = () => {

  return (
    <>
      <Navbar />
      <div className="virtual-office-wrapper d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2 virtual-office-wrapper-inner" style={{width: "50%", margin: "auto"}} data-aos="zoom-in-up">
          <h1>Dedicated Desk</h1>
          <p>Get your dedicated workspace no matter when you visit 1Office. In case you prefer operating from a
          specific desk, have your private drawers and locker; we recommend the dedicated desk option.</p>
          <p>At a monthly affordable price, you will be entitled to the following:</p>

          <ul>
            <li>Up to 60 printouts</li>
            <li>4 X ½ hour access to 1-to-1 meeting lounge per month</li>
            <li>2 X ½ hour access to meeting room per month</li>
            <li>Telephone call handling and forwarding by professional front desk</li>
            <li>In case you are not at your desk, we take a message for you and send you notification via SMS,
            WhatsApp, & Email</li>
            <li>Receiving physical mail in case you are not available to receive it</li>
            <li>25% discount to meeting room access in case needed more than what is included in the free
            services</li>
            <li>25% discount on 1-to-1 meeting lounge area in case needed more than what is included in the free
            services</li>
            <li>25% discount to services related to Graphic Design, Content Management, Translation, Marketing,
            Digital Marketing, Legal Consultations, IT & Development, Legal Accounting Consultations</li>
            <li>Fully ready to use PC at your service with a username and password specifically for your use and to
            ensure your privacy & security</li>
            <li>Lockable & secure Drawers and a locker for your dedicated use</li>
          </ul>

          <h4>The Package is at $300 per month</h4>

        </div>

        <div className="d-flex flex-column gap-2 vo-info">
          <h5>For more details!</h5>
          <div className=" d-flex gap-4">
            <a href="https://wa.me/+96170100094"><img style={{ width: "40px" }} src="whatsapp.png" alt="" /></a>
            <a href="mailto:info@oneoffice.world"><img style={{ width: "40px" }} src="email.png" alt="" /></a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default DedicatedDesk;