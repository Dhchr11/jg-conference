import React from "react";
import logo from "../assets/logo.png";
import { FaCalendar, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import { MdLocationOn, MdFilePresent } from "react-icons/md";

function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <span className="bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-semibold">
                International Conference 2026
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                International Conference on
                <span className="text-yellow-400">
                  {" "}
                  Smart Innovation
                </span>
                <br />
                for Sustainable Development Goals
              </h1>

              <p className="mt-6 text-lg text-gray-200">
                Join researchers, academicians and industry experts from
                around the world to explore the future of Artificial
                Intelligence, Data Science, Cloud Computing and Emerging
                Technologies.
              </p>

              <div className="flex flex-wrap gap-6 mt-8">

                <div className="flex items-center gap-2">
                  <FaCalendar className="text-yellow-400" />
                  <span>20 - 22 March 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-yellow-400" />
                  <span>JG University, Ahmedabad</span>
                </div>

              </div>

              <div className="flex gap-5 mt-10">

                <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                  Submit Paper
                </button>

                <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-900 transition">
                  Register Now
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="flex justify-center">

              <div className="bg-white rounded-3xl shadow-2xl p-10">

                <img
                  src={logo}
                  alt="JG University"
                  className="w-80 mx-auto"
                />

                <h2 className="text-red-800 font-bold text-2xl mt-6 text-center">
                  JG University
                </h2>

                <p className="text-gray-600 mt-4 text-center">
                  Empowering Innovation Through Research &
                  Technology
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <img
              src={logo}
              alt=""
              className="w-80 mx-auto"
            />

            <div>

              <h2 className="text-4xl font-bold text-red-800">
                About Conference
              </h2>

              <p className="mt-6 text-gray-600 leading-8">

                The International Conference on Smart Innovation for
                Sustainable Development Goals (ICSISDG 2026)
                provides a platform for researchers,
                academicians, students and industry professionals
                to present innovative research and exchange ideas
                on emerging technologies.

              </p>

              <button className="mt-8 bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-900 transition">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="py-20 bg-yellow-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaUsers className="mx-auto text-red-700" size={45} />

              <h2 className="text-4xl font-bold mt-4">500+</h2>

              <p className="text-gray-600 mt-2">
                Participants
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <MdFilePresent className="mx-auto text-red-700" size={45} />

              <h2 className="text-4xl font-bold mt-4">150+</h2>

              <p className="text-gray-600 mt-2">
                Research Papers
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaGlobeAmericas className="mx-auto text-red-700" size={45} />

              <h2 className="text-4xl font-bold mt-4">20+</h2>

              <p className="text-gray-600 mt-2">
                Countries
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">

              <FaCalendar className="mx-auto text-red-700" size={45} />

              <h2 className="text-4xl font-bold mt-4">3 Days</h2>
              <p className="text-gray-600 mt-2">
                Conference
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* IMPORTANT DATES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-red-800 mb-16">
            Important Dates
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Paper Submission", "20 Jan 2026"],
              ["Acceptance", "10 Feb 2026"],
              ["Registration", "25 Feb 2026"],
              ["Conference", "20 Mar 2026"],
            ].map((item, index) => (
              <div
                key={index}
                className="border-t-4 border-yellow-400 bg-gray-50 rounded-xl p-8 shadow"
              >
                <h3 className="text-xl font-bold text-red-700">
                  {item[0]}
                </h3>
                <p className="mt-4 text-gray-600">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">
            Ready to Join the Conference?
          </h2>
          <p className="mt-6 text-xl text-gray-200">
            Register now and become part of an international
            research community.
          </p>
          <button className="mt-10 bg-yellow-400 text-red-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition">
            Register Now
          </button>
        </div>

      </section>

    </>
  );
}

export default Home;