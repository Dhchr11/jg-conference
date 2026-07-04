import React from "react";
import { FaStar } from "react-icons/fa";

function Speakers() {
  const speakers = [
    {
      name: "Dr. Andrew Ng",
      affiliation: "Founder of deeplearning.ai",
      topic: "The Future of AI",
      expertise: "Artificial Intelligence, Machine Learning",
    },
    {
      name: "Prof. Fei-Fei Li",
      affiliation: "Stanford University",
      topic: "Human-Centered AI",
      expertise: "Computer Vision, AI Ethics",
    },
    {
      name: "Dr. Satya Nadella",
      affiliation: "Microsoft CEO",
      topic: "Cloud & Digital Transformation",
      expertise: "Cloud Computing, Enterprise Tech",
    },
    {
      name: "Prof. Kate Crawford",
      affiliation: "University of Southern California",
      topic: "Ethics in AI & Data",
      expertise: "Data Ethics, Social Impact of AI",
    },
    {
      name: "Dr. Demis Hassabis",
      affiliation: "DeepMind",
      topic: "Advanced AI Research",
      expertise: "Deep Learning, Neuroscience",
    },
    {
      name: "Prof. Yoshua Bengio",
      affiliation: "University of Montreal",
      topic: "Deep Learning Fundamentals",
      expertise: "Neural Networks, Deep Learning",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Distinguished Speakers</h1>
          <p className="mt-4 text-xl text-gray-200">
            Learn from leading experts and innovators in technology and research
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-r from-red-700 to-red-600 h-32 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-red-700">
                      {speaker.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{speaker.affiliation}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-red-700 mb-2">Keynote Topic:</h4>
                    <p className="text-gray-600 text-sm mb-4">{speaker.topic}</p>
                    
                    <div className="flex items-start gap-2">
                      <FaStar className="text-yellow-400 mt-1" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700">Expertise</p>
                        <p className="text-xs text-gray-600">{speaker.expertise}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Speakers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-10">
            Become a Speaker
          </h2>
          <div className="bg-yellow-50 rounded-xl p-12 border-l-4 border-yellow-400 max-w-3xl mx-auto">
            <p className="text-gray-600 leading-8 mb-6">
              We are inviting proposals for keynote presentations, technical talks, and panel discussions. 
              If you are an expert in your field and would like to share your insights with our global audience, 
              we would love to hear from you!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-700">30 min</p>
                <p className="text-gray-600 text-sm">Keynote Duration</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-700">500+</p>
                <p className="text-gray-600 text-sm">Expected Audience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-700">Global</p>
                <p className="text-gray-600 text-sm">Audience Reach</p>
              </div>
            </div>
            <button className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-800 transition">
              Submit Speaker Proposal
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Speakers;
