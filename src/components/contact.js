import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <h2 className="text-3xl text-center text-indigo-600 mb-8">Contact Me</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
          {submitted && <p className="mt-4 text-center text-green-500">Thank you! Your message has been sent.</p>}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 text-lg">
            <FontAwesomeIcon icon={faPhone} className="text-indigo-600 text-xl" />
            <p>+1 437 388 9319</p>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 text-xl" />
            <p>jilsjoseph769@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-600 text-xl" />
            <p>Ontario, Canada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
