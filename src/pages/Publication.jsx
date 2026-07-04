import React from "react";
import { FaBook, FaGlobeAmericas, FaAward } from "react-icons/fa";

function Publication() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Publication Information</h1>
          <p className="mt-4 text-xl text-gray-200">
            Learn about publication opportunities and indexing details
          </p>
        </div>
      </section>

      {/* Publication Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <FaBook className="text-red-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-3">Proceedings</h3>
              <p className="text-gray-600 text-sm">
                All accepted papers will be published in conference proceedings with ISBN
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <FaGlobeAmericas className="text-red-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-3">Indexing</h3>
              <p className="text-gray-600 text-sm">
                Papers indexed in Scopus, Web of Science, and other international databases
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <FaAward className="text-red-700 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-3">Recognition</h3>
              <p className="text-gray-600 text-sm">
                Best paper awards and recognition for outstanding contributions
              </p>
            </div>
          </div>

          {/* Publication Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Publishing Details</h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-b pb-4">
                <p className="font-semibold text-red-700 mb-2">Conference Proceedings</p>
                <p>All accepted papers will be compiled into a comprehensive proceedings volume with ISBN number. Digital copies will be available on the conference website.</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold text-red-700 mb-2">Indexing Databases</p>
                <p>Proceedings are indexed in major international databases including Scopus, Web of Science Core Collection, Google Scholar, and other academic search engines.</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold text-red-700 mb-2">Open Access</p>
                <p>Papers will be made available through open access platforms to maximize visibility and impact in the research community.</p>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">DOI Assignment</p>
                <p>Each accepted paper will receive a unique Digital Object Identifier (DOI) for permanent citation and tracking.</p>
              </div>
            </div>
          </div>

          {/* Indexing Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Scopus Indexing</h3>
              <p className="text-gray-600 mb-4">
                Our conference proceedings are indexed in Scopus, providing global visibility for your research.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Scopus coverage</li>
                <li>✓ Citation tracking</li>
                <li>✓ Author profiles</li>
                <li>✓ H-index calculation</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Web of Science</h3>
              <p className="text-gray-600 mb-4">
                Papers are indexed in Web of Science Core Collection for maximum research impact.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Citation reports</li>
                <li>✓ Impact metrics</li>
                <li>✓ Research evaluation</li>
                <li>✓ Performance tracking</li>
              </ul>
            </div>
          </div>

          {/* Copyright & Rights */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Copyright & Rights</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Copyright Transfer:</strong> Authors retain copyright of their work. By publishing with us, you grant ICSISDG 2026 the right to publish and distribute the paper.
              </p>
              <p>
                <strong>Reuse Rights:</strong> Authors may reuse their published papers in dissertations, personal websites, and institutional repositories.
              </p>
              <p>
                <strong>License:</strong> Papers are published under Creative Commons Attribution License (CC BY), allowing others to share and adapt the work with proper attribution.
              </p>
              <p>
                <strong>Plagiarism Policy:</strong> All submissions are checked for plagiarism. Instances exceeding 20% similarity may be rejected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Publication Timeline
          </h2>
          <div className="space-y-4">
            {[
              ["Paper Submission", "20 January 2026"],
              ["Review Completion", "10 February 2026"],
              ["Final Revised Submission", "15 February 2026"],
              ["Proceedings Compilation", "1-15 March 2026"],
              ["Conference Dates", "20-22 March 2026"],
              ["Proceedings Publication", "25 March 2026"],
              ["Indexing in Databases", "30 March - 30 April 2026"],
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="text-gray-700">{item[0]}</span>
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
