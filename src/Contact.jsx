import React, { useEffect, useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Username is required!",
      }));
      isValid = false;
    }

    if (!data.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required!",
      }));
      isValid = false;
    } else if (!emailRegex.test(data.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleButtonClick = async () => {
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await fetch("https://formspree.io/mdrtisha@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          console.log("Message has been sent!");
          setData({
            name: "",
            email: "",
            message: ""
          });
        } else {
          console.error("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("An error occurred. Please try again later.");
        console.error(error);
      }
    }
  };
  

  return (
    <div id="contact" className="mainContact">
      <div className="subContact">
        <div className="left">
          <h1>Let’s talk on something great together</h1>
          <div className="iconsAndText">
            <div className="emailContact">
              <div className="contactIcon1">
                <MdEmail />
              </div>
              <div className="text1">mdrtisha@gmail.com</div>
            </div>
            <div className="phone">
              <div className="contactIcon2">
                <FaPhoneAlt />
              </div>
              <div className="text2">9840300970</div>
            </div>
            <div className="location">
              <div className="contactIcon3">
                <FaLocationDot />
              </div>
              <div className="text3">Lalitpur</div>
            </div>
          </div>
        </div>
        <form
          className="form"
          action="https://formspree.io/mdrtisha@gmail.com"
          method="POST"
        >
          <div className="name">Your name</div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <label htmlFor="">Your email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <label htmlFor="">Your message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInputChange}
            cols="30"
            rows="10"
          ></textarea>

          <div className="btn" onClick={handleButtonClick}>
            Send Message
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
