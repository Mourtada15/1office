import "./VirtualOffice.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useLocation } from "react-router-dom";

const VirtualOffice = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Navbar />
      {/* <div className={pathname === '/virtualoffice' ? "virtual-office-wrapper-vo d-flex flex-column gap-4" : "virtual-office-wrapper d-flex flex-column gap-4"}> */}
      <div className="virtual-office-wrapper-vo d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2 virtual-office-wrapper-inner" style={{width: "50%", margin: "auto"}} data-aos="zoom-in-up">
          <h1>Virtual Office</h1>
          <p>Establishing presence globally is not an easy thing to do. We provide
            your business with an address, a telephone number, & a mailing address
            in the heart of Beirut. </p>
          <ul>
            <li>Never miss a call</li>
            <li>Never miss a shipment</li>
            <li>Never miss an opportunity</li>
          </ul>

          <p>Our professional secretary will be handling all your calls, shipments, and
            will convey all to you via prompt SMS, WhatsApp, & Email. By doing so,
            we shall be your professional office, even if you work from home or a
            freelancer. <br /><br />
            Contact is done during office hours from Monday to Friday
            (9:00 – 17:00).</p>

          <p>The professional address is also vital for you to register your company in
            case needed since this is part of the requirements you will need to
            register your business legally.</p>

          <h4>Price of the service is $25 per month</h4>
        </div>

        <div className="d-flex flex-column gap-2 vo-info">
          <h5>For more details!</h5>
          <div className=" d-flex gap-4">
            <a href="https://wa.me/+96170100094"><img style={{ width: "40px" }} src="whatsapp.png" alt="" /></a>
            <a href="mailto:info@1office.space"><img style={{ width: "40px" }} src="email.png" alt="" /></a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default VirtualOffice;