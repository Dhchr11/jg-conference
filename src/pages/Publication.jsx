import React from "react";
import { FaBook, FaGlobeAmericas, FaAward, FaFilePdf, FaEnvelope } from "react-icons/fa";

function Publication() {
  const timeline = [
    ["Paper Submission", "Open"],
    ["Review Process", "After Submission"],
    ["Acceptance Notification", "As per Conference Schedule"],
    ["Final Camera Ready Paper", "After Acceptance"],
    ["Conference Proceedings", "Post Conference"],
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Publication</h1>
          <p className="mt-4 text-xl text-gray-200">
            Publication partners, indexing details and manuscript submission.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <FaBook className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="text-xl font-bold text-red-800 mb-3">Two Proceedings</h3>
              <p className="text-gray-600">Accepted papers will be published in one of the official conference proceedings based on the author's selected publication option.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <FaGlobeAmericas className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="text-xl font-bold text-red-800 mb-3">International Indexing</h3>
              <p className="text-gray-600">Proceedings will be submitted for indexing through the respective publisher's indexing channels.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <FaAward className="mx-auto text-5xl text-red-700 mb-4"/>
              <h3 className="text-xl font-bold text-red-800 mb-3">High Quality Publication</h3>
              <p className="text-gray-600">Peer-reviewed papers published by internationally recognized publishing partners.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10 mb-10">
            <h2 className="text-3xl font-bold text-red-800 mb-8">Publication Opportunities</h2>

            <div className="grid lg:grid-cols-2 gap-8">

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Option 1 – CRC Press (Taylor & Francis)
                </h3>

                <p className="text-gray-700 leading-7 mb-4">
                  The proceedings of ICSISDG 2026 will be published by <strong>CRC Press (Taylor & Francis)</strong>
                  as a proceedings book titled <strong>"Advances in Electrical and Computer Technologies"</strong>.
                </p>

                <p className="text-gray-700 leading-7 mb-4">
                  The proceedings book will be submitted for indexing in leading databases including:
                </p>

                <ul className="space-y-2 text-gray-700">
                  <li>• Scopus</li>
                  <li>• CPCI (Clarivate Analytics – Web of Science)</li>
                  <li>• Other leading indexing databases</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Option 2 – Atlantis Press (Springer Nature)
                </h3>

                <p className="text-gray-700 leading-7 mb-4">
                  The proceedings of ICSISDG 2026 will be published by
                  <strong> Atlantis Press (Springer Nature)</strong> in a subject-specific conference proceedings series.
                </p>

                <p className="text-gray-700 leading-7 mb-4">
                  Upon publication, the proceedings will be distributed through Springer Nature
                  and various international academic databases.
                </p>

                <ul className="space-y-2 text-gray-700">
                  <li>• Springer Nature Distribution</li>
                  <li>• International Academic Databases</li>
                  <li>• Publisher Indexing Services</li>
                </ul>
              </div>

            </div>

            <div className="mt-10 bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-5">
                Important Note
              </h3>

              <p className="text-gray-700 leading-8">
                Your paper will be accepted for publication in <strong>one</strong> of the above
                publication options based on your selected preference. Authors are advised
                to visit the official websites of the respective publishers for the latest
                indexing information and publication policies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <FaFilePdf className="text-red-700 text-3xl"/>
              <h2 className="text-3xl font-bold text-red-800">
                How to Submit Your Manuscript
              </h2>
            </div>

            <p className="text-gray-700 leading-8 mb-6">
              Paper submission for <strong>ICSISDG 2026 is OPEN.</strong>
              Authors are requested to submit their full-length manuscript
              in <strong>PDF format</strong> using a <strong>single-column layout</strong>.
            </p>

            <div className="bg-yellow-50 rounded-xl border-l-4 border-yellow-400 p-6 flex items-center gap-4">
              <FaEnvelope className="text-red-700 text-3xl"/>
              <div>
                <h4 className="font-bold text-red-800">Submission Email</h4>
                <p className="text-lg font-semibold text-gray-700">
                  icsisdg2026@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-red-800 mb-8">
              Publication Timeline
            </h2>

            {timeline.map((item,index)=>(
              <div key={index} className="flex justify-between py-4 border-b">
                <span>{item[0]}</span>
                <span className="font-bold text-red-700">{item[1]}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Publication;
