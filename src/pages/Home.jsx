import React from "react";
import logo from "../assets/logo.png";
import { FaCalendar, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import { MdLocationOn, MdFilePresent } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-semibold">
                International Conference 2026
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                International Conference on
                <span className="text-yellow-400"> Smart Innovation</span>
                <br />
                for Sustainable Development Goals
              </h1>

              <p className="mt-6 text-lg text-gray-200">
                Join researchers, academicians, industry professionals and
                scholars from around the world to shape a sustainable future
                through innovation.
              </p>

              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-yellow-400" />
                  <span>20–22 March 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-yellow-400" />
                  <span>JG University, Ahmedabad</span>
                </div>
              </div>

              <div className="flex gap-5 mt-10">
                <Link
                  to="/guidelines"
                  className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  Submit Paper
                </Link>

                <Link
                  to="/registration"
                  className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-900 transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <img src={logo} alt="JG University" className="w-80 mx-auto" />
                <h2 className="text-red-800 font-bold text-2xl mt-6 text-center">
                  JG University
                </h2>
                <p className="text-gray-600 mt-4 text-center">
                  Empowering Innovation Through Research & Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={logo} alt="Conference" className="w-96 mx-auto" />

            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">
                About ICSISDG 2026
              </h2>

              <p className="text-gray-700 leading-8">
                The International Conference on Smart Innovation for Sustainable
                Development Goals (ICSISDG 2026) provides a global platform for
                researchers, academicians, industry professionals, scientists
                and scholars to present innovative research and exchange ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About JG University */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-red-800 mb-12">
            About JG University
          </h2>

          <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-8">
            <p>
              JG University is a new-age, technology-driven university
              committed to delivering future-focused education that aligns
              with evolving industry needs and global academic standards.
              Established with the vision of nurturing innovation,
              entrepreneurship, and research excellence, the University
              offers a diverse range of undergraduate, postgraduate,
              doctoral, and professional programs across disciplines
              including Engineering, Computer Science, Management, Commerce,
              Law, Science & Technology, Investigative and Applied Sciences.
            </p>

            <p>
              Recognized by the University Grants Commission (UGC), JG
              University emphasizes experiential learning, interdisciplinary
              education, industry collaboration, skill development, and
              technology-enabled teaching methodologies. Through a
              curriculum designed in consultation with academic experts and
              industry leaders, the University equips students with the
              knowledge, practical skills, and entrepreneurial mindset
              required to excel in employment, higher education, research,
              or self-employment.
            </p>

            <p>
              JG University is sponsored by the ASIA Charitable Trust, a
              distinguished educational trust established in 1965, with a
              legacy of over six decades in promoting quality education. The
              Trust has made significant contributions to higher education
              by successfully managing 17 colleges and 3 schools, serving
              thousands of students across diverse academic disciplines.
              Building on this strong foundation, JG University continues to
              foster academic excellence, innovation, research, and social
              responsibility, while preparing graduates to become globally
              competent professionals and responsible citizens who
              contribute to sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              [<FaUsers size={45} className="mx-auto text-red-700" />, "500+", "Participants"],
              [<MdFilePresent size={45} className="mx-auto text-red-700" />, "150+", "Research Papers"],
              [<FaGlobeAmericas size={45} className="mx-auto text-red-700" />, "20+", "Countries"],
              [<FaCalendar size={45} className="mx-auto text-red-700" />, "3 Days", "Conference"],
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                {item[0]}
                <h2 className="text-4xl font-bold mt-4">{item[1]}</h2>
                <p className="text-gray-600 mt-2">{item[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-red-800 mb-16">
            Important Dates
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              ["Due Date for Submission", "30 September 2026"],
              ["Notification of Acceptance", "24 October 2026"],
              ["Registration Deadline", "31 October 2026"],
              ["Camera-ready Paper Submission Due", "6 November 2026"],
              ["Conference Schedule", "14 November 2026"],
              ["Conference Starts On", "22 November 2026"],
            ].map((d, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border-l-4 border-yellow-400 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-red-700">{d[0]}</h3>

                <span className="mt-3 md:mt-0 bg-yellow-400 text-red-900 font-semibold px-5 py-2 rounded-full">
                  {d[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">Ready to Join the Conference?</h2>

          <p className="mt-6 text-xl text-gray-200">
            Register now and become part of an international research community.
          </p>

          <Link
            to="/registration"
            className="inline-block mt-10 bg-yellow-400 text-red-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;