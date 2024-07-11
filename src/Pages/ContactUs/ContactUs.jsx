// import Footer from "../../Components/Footer/Footer";
// import Navbar from "../../Components/Navbar/Navbar";
// import "./ContactUs.css";

// const ContactUs = () => {
//   return (
//     <div className="contact-us-wrapper">
//       <Navbar />
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.11238484917016!2d35.47969174616432!3d33.8942430156186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172b5bfcb549%3A0x14f6a78785d70dcb!2sCPH%20World%20Media!5e0!3m2!1sen!2slb!4v1669726809621!5m2!1sen!2slb"
//         width="100%"
//         height="450"
//         allowfullscreen=""
//         loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"
//       ></iframe>
//       <div>
//         <div className="contact-us-one">
//           <div>
//             <h1>Contact us</h1>
//             <h4>Have a question? We're here to help.</h4>
//           </div>
//           <form className="contact-us-form">
//             <h4>Get in touch with 1Office team</h4>
//             <input type="text" placeholder="First Name" />
//             <input type="text" placeholder="Last Name" />
//             <input type="email" placeholder="Email" />
//             <textarea
//               name=""
//               id=""
//               cols="30"
//               rows="8"
//               placeholder="Your Message"
//             ></textarea>
//             <button>Send Message</button>
//           </form>
//         </div>
//       </div>

//       {/* <p className="contact-us-address">
//         Working Hours: From 9:00 AM To 3:00 PM Beirut Time
//       </p> */}
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./ContactUs.css";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Concatenate first and last names into a single from_name field
    const fromName = `${formState.firstName} ${formState.lastName}`;

    // Prepare data to send
    const formData = {
      ...formState,
      from_name: fromName, // Ensure this matches the variable in your EmailJS template
    };

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_mtr45mj",
        "template_z0myk0d",
        e.target,
        "KtvbtfVSIePHjDZjf"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-us-wrapper">
      <Navbar />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.11238484917016!2d35.47969174616432!3d33.8942430156186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172b5bfcb549%3A0x14f6a78785d70dcb!2sCPH%20World%20Media!5e0!3m2!1sen!2slb!4v1669726809621!5m2!1sen!2slb"
        title="Google Map"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <div className="contact-us-one">
          <div>
            <h1>Contact us</h1>
            <h4>Have a question? We're here to help.</h4>
          </div>
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <h4>Get in touch with 1Office team</h4>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formState.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formState.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
