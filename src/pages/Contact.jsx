import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-semibold">
            Get in Touch
          </span>
          <h1 className="text-5xl font-bold mt-6">Contact Us</h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Have questions about ICSISDG 2026? Reach out to us and our team
            will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-red-800 mb-6">
                Contact Information
              </h2>

              <div className="flex items-start gap-4 bg-yellow-50 p-6 rounded-xl shadow-md">
                <FaMapMarkerAlt size={28} className="text-red-700 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-red-700">Address</h3>
                  <p className="text-gray-700 mt-1">
                    JG University, Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-yellow-50 p-6 rounded-xl shadow-md">
                <FaPhoneAlt size={26} className="text-red-700 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-red-700">Phone</h3>
                  <p className="text-gray-700 mt-1">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-yellow-50 p-6 rounded-xl shadow-md">
                <FaEnvelope size={26} className="text-red-700 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-red-700">Email</h3>
                  <p className="text-gray-700 mt-1">icsisdg2026@jgu.edu.in</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-l-4 border-yellow-400 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">We'd Love to Hear from You</h2>
          <p className="mt-6 text-xl text-gray-200">
            Whether it's about submissions, registration, or general queries —
            our team is here to help.
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;