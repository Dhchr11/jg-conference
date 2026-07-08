import React from "react";
import {
  FaAward,
  FaUsers,
  FaGlobeAmericas,
  FaLightbulb,
  FaUniversity,
  FaMicrophone,
  FaBookOpen,
  FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function About() {
  const values = [
    {
      icon: <FaAward />,
      title: "Academic Excellence",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: <FaUsers />,
      title: "Global Collaboration",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Worldwide Impact",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const highlights = [
    {
      icon: <FaBookOpen />,
      title: "Research Areas",
      items: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Cloud Computing",
        "Cyber Security",
        "IoT",
      ],
    },
    {
      icon: <FaUniversity />,
      title: "Focus Areas",
      items: [
        "Smart Cities",
        "Healthcare",
        "Green Energy",
        "Sustainability",
        "Education",
        "Industry 5.0",
      ],
    },
    {
      icon: <FaMicrophone />,
      title: "Conference Activities",
      items: [
        "Keynote Sessions",
        "Paper Presentation",
        "Technical Workshops",
        "Poster Presentation",
        "Networking",
        "Industry Showcase",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            About ICSISDG 2026
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
            International Conference on Smart Innovation for Sustainable
            Development Goals (ICSISDG 2026) is a premier international
            platform that brings together researchers, academicians,
            scientists, students, and industry professionals to share
            innovative research and discuss emerging technologies that
            contribute to sustainable global development.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-red-700 font-semibold uppercase tracking-widest">
                Our Mission
              </span>

              <h2 className="text-4xl font-bold mt-3 text-gray-800">
                Driving Innovation for a Sustainable Future
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                ICSISDG 2026 aims to provide a dynamic international platform
                for researchers, educators, innovators, and industry experts
                to exchange groundbreaking ideas, present high-quality
                research, and promote interdisciplinary collaboration.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                The conference supports the United Nations Sustainable
                Development Goals (SDGs) by encouraging innovative
                technologies that solve real-world challenges and create
                sustainable solutions for future generations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              {values.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-lg text-gray-800">
                    {item.title}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* About JG University */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <img src={logo} alt="JG University" className="w-72 mx-auto" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-red-700 font-semibold uppercase tracking-widest">
                Hosted By
              </span>

              <h2 className="text-4xl font-bold mt-3 text-gray-800">
                About JG University
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                JG University is a new-age, technology-driven university
                committed to delivering future-focused education that aligns
                with evolving industry needs and global academic standards.
                Established with the vision of nurturing innovation,
                entrepreneurship, and research excellence, the University
                offers a diverse range of undergraduate, postgraduate,
                doctoral, and professional programs across disciplines
                including Engineering, Computer Science, Management,
                Commerce, Law, Science & Technology, Investigative and
                Applied Sciences.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Recognized by the University Grants Commission (UGC), JG
                University emphasizes experiential learning, interdisciplinary
                education, industry collaboration, skill development, and
                technology-enabled teaching methodologies, equipping students
                with the knowledge, practical skills, and entrepreneurial
                mindset required to excel in employment, higher education,
                research, or self-employment.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                JG University is sponsored by the ASIA Charitable Trust, a
                distinguished educational trust established in 1965, with a
                legacy of over six decades in promoting quality education,
                successfully managing 17 colleges and 3 schools, and serving
                thousands of students across diverse academic disciplines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-red-800 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-5xl font-bold text-yellow-400">500+</h2>
              <p className="mt-3 text-lg">Research Papers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-400">50+</h2>
              <p className="mt-3 text-lg">Keynote Speakers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-400">30+</h2>
              <p className="mt-3 text-lg">Countries</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-yellow-400">1000+</h2>
              <p className="mt-3 text-lg">Participants</p>
            </div>

          </div>

        </div>

      </section>

      {/* Highlights */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-red-800">
            Conference Highlights
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-14">
            Explore the exciting opportunities available at ICSISDG 2026.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {highlights.map((section, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8"
              >

                <div className="w-16 h-16 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-3xl mb-6">
                  {section.icon}
                </div>

                <h3 className="text-2xl font-bold text-red-700 mb-6">
                  {section.title}
                </h3>

                <ul className="space-y-4">

                  {section.items.map((item, i) => (

                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>

                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Closing Section */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <FaHandshake className="text-red-700 text-6xl mx-auto mb-8" />

          <h2 className="text-4xl font-bold text-gray-800">
            Join ICSISDG 2026
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Become a part of an inspiring international community committed to
            advancing science, technology, innovation, and sustainability.
            Connect with global experts, showcase your research, and
            contribute toward achieving the Sustainable Development Goals.
          </p>

          <Link to="/registration" className="inline-block mt-10 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold transition">
            Register Now
          </Link>

        </div>

      </section>
    </>
  );
}
export default About;