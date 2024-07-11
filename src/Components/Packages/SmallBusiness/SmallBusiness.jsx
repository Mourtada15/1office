import "./SmallBusiness.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const SmallBusiness = () => {

  return (
    <>
      <Navbar />
      <div className="virtual-office-wrapper d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2 virtual-office-wrapper-inner" style={{ width: "50%", margin: "auto" }} data-aos="zoom-in-up">
          <h1>Small Business</h1>
          <p>In case you are a small company and wishing to operate hassle-free and not bother yourself with overhead costs and municipality fees as
            well as other legal and monthly bills, 1Office provides you with the best possible solution to ensure that you remain fully focused on your
            business.
          </p>
          <p>If you are in the process of finding a new location for your company and not able to find what you are looking for yet in terms of location
            and value for the money, why not consider operating from 1Office location until you find what you are looking for?</p>
          <p style={{ color: "red", fontWeight: "bold" }}>The small business package offers 1 large dedicated office along with 4 small dedicated workstations.</p>
          <p>The option provides a full-fledged professional work environment with full access to all areas of 1Office; meeting room, 1-to-1 meeting 
          lounge, kitchenette, as well as a parking space for 1 vehicle.</p>
          <p>1Office will also provide the following additional services to add to the already tempting package:</p>
          <ul>
            <li>1 large office space with one big workstation (usually for general managers or CEOs) and a balcony access</li>
            <li>4 workstations located within one room in order for your employees to coordinate work between them</li>
            <li>A dedicated landline in order for you to be reached directly</li>
            <li>A dedicated printer allowing unlimited printing</li>
            <li>We also provide you with your assistant from the front desk to help with handling your phone calls, tracking your parcels, receive 
            packages on your behalf, schedule your meetings after coordinating with you</li>
            <li>Unlimited access for up to ½ hour 1-to-1 meeting lounge (to be coordinated with 1Office management)</li>
            <li>Unlimited access for up to ½ hour access to meeting room (to be coordinated with 1Office management)</li>
            <li>Fully ready to use PCs at your service with a username and password specifically for your use and to ensure your privacy & security</li>
            <li>15 Lockable & secure Drawers and 6 lockers for your dedicated use</li>
            <li>Have your logo and name posted on the main office door via vinyl sticker. Size of logo may occupy the entire glass door area of your 
            office</li>
            <li>Pay as you go as we shall receive payment monthly per each month of use. By doing so, we shall be assisting your start-up since we 
            know and appreciate that each penny counts and hence, we shall not require 6 months or 1-year advanced payment</li>
          </ul>
          <h4>The Package is at $1,400 per month</h4>

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

export default SmallBusiness;