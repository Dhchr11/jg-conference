import React from "react";
import { FaUser } from "react-icons/fa";

function Committees() {
  const committees = [
    {
      name: "General Chair",
      members: ["Dr. Rajesh Kumar", "Prof. Neha Singh"],
    },
    {
      name: "Program Committee",
      members: ["Dr. Amit Patel", "Dr. Sanjay Verma", "Prof. Priya Sharma", "Dr. Vikram Singh"],
    },
    {
      name: "Organizing Committee",
      members: ["Dr. Arjun Gupta", "Prof. Meera Desai", "Dr. Rohit Kumar", "Ms. Anjali Nair"],
    },
    {
      name: "Technical Committee",
      members: ["Dr. Anil Kumar", "Prof. Suresh Kumar", "Dr. Praveen Singh", "Dr. Mohan Rao"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Committees</h1>
          <p className="mt-4 text-xl text-gray-200">
            Meet the organizing committees driving ICSISDG 2026
          </p>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-red-900 font-bold">
                    {index + 1}
                  </span>
                  {committee.name}
                </h2>
                <div className="space-y-4">
                  {committee.members.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FaUser className="text-red-700" />
                      <p className="text-gray-600">{member}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-16">
            International Advisory Board
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Prof. James Wilson (University of Oxford)",
              "Dr. Lisa Anderson (MIT, USA)",
              "Prof. Chen Wei (Tsinghua University, China)",
              "Dr. Maria Garcia (Universidad de Madrid, Spain)",
              "Prof. Yuki Tanaka (Tokyo University, Japan)",
              "Dr. Pierre Dubois (Sorbonne University, France)",
            ].map((member, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 text-center shadow-lg">
                <FaUser className="text-red-700 text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Committees;
