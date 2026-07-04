import React from "react";
import { FaRobot, FaDatabase, FaCloud, FaNetworkWired, FaLeaf } from "react-icons/fa";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: <FaRobot />,
      description: "Advances in artificial intelligence, deep learning, and machine learning applications",
      topics: ["Neural Networks", "NLP", "Computer Vision", "Reinforcement Learning", "AI Ethics"],
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      icon: <FaDatabase />,
      description: "Big data processing, analytics, and business intelligence",
      topics: ["Big Data", "Data Mining", "Visualization", "Predictive Analytics", "Data Privacy"],
    },
    {
      id: 3,
      title: "Cloud & Distributed Systems",
      icon: <FaCloud />,
      description: "Cloud computing, edge computing, and distributed systems",
      topics: ["Cloud Architecture", "Microservices", "Edge Computing", "Serverless", "Containers"],
    },
    {
      id: 4,
      title: "IoT & Smart Systems",
      icon: <FaNetworkWired />,
      description: "Internet of Things and smart city technologies",
      topics: ["Smart Cities", "Wearables", "Sensors", "Connectivity", "Smart Homes"],
    },
    {
      id: 5,
      title: "Sustainable Technologies",
      icon: <FaLeaf />,
      description: "Green computing and sustainable development applications",
      topics: ["Green Energy", "Renewable Tech", "Sustainability", "Environmental Monitoring", "Carbon Tracking"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Core Tracks</h1>
          <p className="mt-4 text-xl text-gray-200">
            Explore our specialized research and technical tracks
          </p>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <div key={track.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-r from-red-700 to-red-600 p-6 text-white">
                  <div className="text-4xl mb-3">{track.icon}</div>
                  <h3 className="text-2xl font-bold">{track.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{track.description}</p>
                  <h4 className="font-semibold text-red-800 mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {track.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            Submit Your Paper
          </h2>
          <div className="bg-yellow-50 rounded-xl p-12 border-l-4 border-yellow-400">
            <p className="text-gray-600 leading-8 mb-6">
              We welcome original research papers, review articles, and case studies related to the above tracks. 
              All submissions will be peer-reviewed and must follow our submission guidelines.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">Submission Deadline</h3>
                <p className="text-gray-600">20 January 2026</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">Paper Acceptance</h3>
                <p className="text-gray-600">10 February 2026</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">Paper Format</h3>
                <p className="text-gray-600">6-8 pages, IEEE format</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4">Publication</h3>
                <p className="text-gray-600">Indexed in Scopus & Web of Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;
