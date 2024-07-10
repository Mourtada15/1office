import "./VirtualOffice.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const VirtualOffice = () => {

  return (
    <>
      <Navbar />
      <div className="virtual-office-wrapper d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2" style={{width: "50%", margin: "auto"}} >
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
            (8:30 – 17:30).</p>

          <p>The professional address is also vital for you to register your company in
            case needed since this is part of the requirements you will need to
            register your business legally.</p>

          <h4>Price of the service is US$100 per month</h4>
        </div>

        <div className="d-flex flex-column gap-2 tizz">
          <h5>Reserve your place now!</h5>
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

export default VirtualOffice;