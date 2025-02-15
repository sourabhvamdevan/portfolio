import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      date: "2024",
      link: "https://coursera.org/share/d34500f498b5ba2d58bb7b2fbd73d1d6"
    },
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google",
      date: "2024",
      link: "https://coursera.org/share/aea8e743850e160e3bb0d91955921c16"
    },
    {
      title: "SAWIT-Ai Learnathon",
      issuer: "GUVI-GEEKS",
      date: "2024",
      link: "https://www.guvi.in/share-certificate/i8V230d1kq5L872C18",
    },
    {
      title: "Industrial IOT Markets and Security",
      issuer: "University of Colorado Boulder",
      date: "2024",
      link: "https://reactjs.org"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 text-white rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                  <a 
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;