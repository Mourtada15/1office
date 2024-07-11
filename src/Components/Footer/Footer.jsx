import "./Footer.css";

const Footer = () => {

  return (
    <>
      <div className="footer">
        {/* <div>
          <h5 className="footer-about-us-header"><b>About Us</b></h5>
          <ul className="footer-about-us">
            <li><a href="#">About One Office</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div> */}

        <div>
          <h5 className="footer-about-us-header"><b>Address</b></h5>
          <p>One Office (1O)</p>

          <p className="footer-about-us">
            <div className="footer-about-us-a">
              <span>Hamra, Commodore, Barouk St</span>
              <span>Chatila Building, 2nd Floor</span>
              <span>PO Box: 13-5300 Chouran</span>
              <span>Postal code: 1102-2802</span>
              <span>Beirut - Lebanon</span>
            </div>
            <div id="contact">
              <span>Phone: +961 1 748333</span>
              <p>email: <a href="mailto:info@1office.space">info@1office.space</a></p>
            </div>
          </p>
        </div>

        <div className="footer-social" >
          <h5><b>Stay Connected</b></h5>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/company/65342769" target="_blank"><img src="linkedin_6422202.svg" alt="linkedinIcon" /></a>
            {/* <a href="" target="_blank"><img src="twitter-alt-circle_12107562.svg" alt="twitterIcon" /></a> */}
            <a href="https://www.facebook.com/oneoffice1O" target="_blank"><img src="facebook_6422199.svg" alt="facebookIcon" /></a>
            <a href="" target="_blank"><img src="instagram_6422200.svg" alt="instagramIcon" /></a>
            {/* <a href="" target="_blank"><img src="youtube_6422215.svg" alt="youtubeIcon" /></a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;