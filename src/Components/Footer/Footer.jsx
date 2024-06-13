// import linkedinIcon from './linkedin_6422202.svg';
// import twitterIcon from './twitter-alt-circle_12107562.svg';
// import facebookIcon from './facebook_6422199.svg';
// import instagramIcon from './instagram_6422200.svg';
// import youtubeIcon from './youtube_6422215.svg';
import "./Footer.css";

const Footer = () => {

  return (
    <>
      <div className="footer">
        <div>
          <h5 className="footer-about-us-header"><b>About Us</b></h5>
          <ul className="footer-about-us">
            <li><a href="#">About energyHQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-social" >
          <h5><b>Stay Connected</b></h5>
          <div className="footer-social-icons">
            {/* <a href="https://www.linkedin.com/company/65342769" target="_blank"><img src="linkedin_6422202.svg" alt="icon" /></a> */}
            <a href="" target="_blank"><img src="twitter-alt-circle_12107562.svg" alt="icon" /></a>
            <a href="https://www.facebook.com/oneoffice1O" target="_blank"><img src="facebook_6422199.svg" alt="icon" /></a>
            <a href="" target="_blank"><img src="instagram_6422200.svg" alt="icon" /></a>
            <a href="" target="_blank"><img src="youtube_6422215.svg" alt="icon" /></a>


            {/* <a href="" target="_blank"><img src="twitter-alt-circle_12107562.svg" alt="icon" /></a>
            <a href="https://www.facebook.com/oneoffice1O" target="_blank"><img src="facebook_6422199.svg" alt="icon" /></a>
            <a href="" target="_blank"><img src="instagram_6422200.svg" alt="icon" /></a>
            <a href="" target="_blank"><img src="youtube_6422215.svg" alt="icon" /></a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;