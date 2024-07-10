import "./StartupPlus.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const StartUpPlus = () => {

  return (
    <>
      <Navbar />
      <div className="virtual-office-wrapper d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2" style={{ width: "50%", margin: "auto" }} >
          <h1>StartUp+</h1>

          <p>This is a very interesting option for a group of professionals who are working together as one entity. It is for those in
            need to start their own business, but do not have the ability to handle various contingencies in case they appear.
            Contingencies may include applying for a landline or paying a big amount to secure a small office as some landlords
            require at least six-month advanced payment and others may consider a yearly pre-payment.
          </p>
          <p>One will provide all the needed in terms of electricity, landline, Wi-Fi, fresh water, kitchenette which is well equipped,
            and even provide a virtual office option where you can have a physical address to register your start-up company.
          </p>
          <p>We even go the extra mile by providing you with 4 workstations, equipped with modern PCs in addition to a dedicated
            printer allowing unlimited printing.</p>
          <p>We also provide you with your assistant from the front desk to help with handling your phone calls, tracking your
            parcels, receive packages on your behalf, schedule your meetings after coordinating with you.
          </p>
          <p>This option is comprised of FOUR dedicated offices closely located to each other or within the same room to ensure your
            privacy.</p>
          <p>In addition, 1O provides the following:</p>
          <ul>
            <li>8 X ½ hour access to 1-to-1 meeting lounge per month</li>
            <li>8 X ½ hour access to meeting room per month</li>
            <li>30% discount to meeting room access in case needed more than what is included in the free services</li>
            <li>30% discount on 1-to-1 meeting lounge area in case needed more than what is included in the free services</li>
            <li>Fully ready to use PCs at your service with a username and password specifically for your use and to ensure your
              privacy & security</li>
            <li>12 Lockable & secure Drawers and 4 lockers for your dedicated use</li>
            <li>Pay as you go as we shall receive payment monthly per each month of use. By doing so, we shall be assisting
              your start-up since we know and appreciate that each penny counts and hence, we shall not require 6 months or
              1-year advanced payment</li>
          </ul>

          <h4>The Package is at US$ 1,000.00 per month</h4>

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

export default StartUpPlus;