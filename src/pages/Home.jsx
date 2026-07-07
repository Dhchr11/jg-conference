import React from "react";
import logo from "../assets/logo.png";
import { FaCalendar, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import { MdLocationOn, MdFilePresent } from "react-icons/md";

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
                <br />for Sustainable Development Goals
              </h1>
              <p className="mt-6 text-lg text-gray-200">
                Join researchers, academicians, industry professionals and scholars
                from around the world to shape a sustainable future through innovation.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2"><FaCalendar className="text-yellow-400"/><span>20–22 March 2026</span></div>
                <div className="flex items-center gap-2"><MdLocationOn className="text-yellow-400"/><span>JG University, Ahmedabad</span></div>
              </div>
              <div className="flex gap-5 mt-10">
                <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">Submit Paper</button>
                <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-900">Register Now</button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <img src={logo} alt="JG University" className="w-80 mx-auto"/>
                <h2 className="text-red-800 font-bold text-2xl mt-6 text-center">JG University</h2>
                <p className="text-gray-600 mt-4 text-center">Empowering Innovation Through Research & Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={logo} alt="Conference" className="w-96 mx-auto"/>
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">About ICSISDG 2026</h2>
              <p className="text-gray-700 leading-8 mb-4">
                The International Conference on Smart Innovation for Sustainable Development Goals (ICSISDG 2026)
                provides a global platform for academicians, researchers, industry professionals,
                scientists and scholars to present innovative research, exchange ideas and explore
                emerging technologies that support the Sustainable Development Goals (SDGs).
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                The conference emphasizes interdisciplinary research in Artificial Intelligence and
                Machine Learning, Internet of Things (IoT), Smart Systems, Emerging Technologies,
                Smart Finance & FinTech, Business Intelligence, Data Analytics, Entrepreneurship,
                Innovation and Sustainable Startup Ecosystems.
              </p>
              <p className="text-gray-700 leading-8">
                ICSISDG 2026 features keynote lectures, invited talks, technical paper presentations,
                tutorials, workshops and panel discussions to promote collaboration among academia,
                industry and policymakers for sustainable innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-800 mb-6">About JG University</h2>
              <p className="text-gray-700 leading-8 mb-4">
                JG University is a new-age, technology-driven university committed to delivering
                future-focused education aligned with evolving industry needs and global academic standards.
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                Recognized by the UGC, the University offers undergraduate, postgraduate, doctoral
                and professional programmes across Engineering, Computer Science, Management,
                Commerce, Law, Science & Technology, and Investigative & Applied Sciences.
              </p>
              <p className="text-gray-700 leading-8 mb-4">
                The University emphasizes experiential learning, interdisciplinary education,
                industry collaboration, innovation, entrepreneurship and research excellence.
              </p>
              <p className="text-gray-700 leading-8">
                Sponsored by the ASIA Charitable Trust (established in 1965), JG University builds
                upon more than six decades of educational excellence while preparing globally
                competent professionals committed to sustainable development.
              </p>
            </div>
            <img src={logo} alt="JG University" className="w-96 mx-auto"/>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              [<FaUsers size={45} className="mx-auto text-red-700"/>,"500+","Participants"],
              [<MdFilePresent size={45} className="mx-auto text-red-700"/>,"150+","Research Papers"],
              [<FaGlobeAmericas size={45} className="mx-auto text-red-700"/>,"20+","Countries"],
              [<FaCalendar size={45} className="mx-auto text-red-700"/>,"3 Days","Conference"]
            ].map((i,idx)=>(
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center">
                {i[0]}<h2 className="text-4xl font-bold mt-4">{i[1]}</h2><p className="text-gray-600 mt-2">{i[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-red-800 mb-16">Important Dates</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Due date for submission"," 30 September 2026"],
              ["Notification of acceptance","24 October 2026"],
              ["Registration deadline","31 October 2026"],
              ["Camera-ready paper submission due","6 November 2026"],
              ["Conference schedule","14 November 2026"],
               ["Conference starts on","22 November 2026"],
            ].map((d,i)=>(
              <div key={i} className="border-t-4 border-yellow-400 bg-gray-50 rounded-xl p-8 shadow">
                <h3 className="text-xl font-bold text-red-700">{d[0]}</h3>
                <p className="mt-4 text-gray-600">{d[1]}</p>
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
          <button className="mt-10 bg-yellow-400 text-red-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300">
            Register Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
