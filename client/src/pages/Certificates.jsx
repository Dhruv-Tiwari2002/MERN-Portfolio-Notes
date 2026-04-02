import React from 'react';

const Certificates = () => {
  // --- THE CURATED "TOP 8" CERTIFICATES ---
  const certificates = [
    {
      title: "Web Development Internship",
      issuer: "Cognifyz Technologies",
      date: "Nov 2024 - Dec 2024",
      description: "Completed a professional internship focusing on practical web development and team coordination.",
      category: "Experience",
      link: "/cognifyz-internship.pdf"
    },
    {
      title: "MERN Stack Development",
      issuer: "CETPA Infotech",
      date: "2025 - Present",
      description: "Comprehensive professional training in MongoDB, Express, React, and Node.js.",
      category: "Core Stack",
      link: "#" // Add your CETPA pdf here when you get it
    },
    {
      title: "React Stack & DevOps Tools",
      issuer: "Infosys Springboard",
      date: "Sep 2024",
      description: "Mastered full-stack integrations, Capstone project delivery, and DevOps methodologies.",
      category: "DevOps & Stack",
      link: "/infosys-react-devops.pdf"
    },
    {
      title: "Project Management Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Mar 2026",
      description: "Learned core project management methodologies, crucial for leading software development lifecycles.",
      category: "Leadership",
      link: "/ibm-project-management.pdf"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "UC San Diego | Coursera",
      date: "Mar 2023",
      description: "Mastered algorithmic techniques, data structures, and complex problem-solving.",
      category: "Computer Science",
      link: "/ucsd-data-structures.pdf"
    },
    {
      title: "Azure AI Vision & NLP Solutions",
      issuer: "Microsoft",
      date: "Jan 2024",
      description: "Built scalable natural language and vision processing solutions using Azure AI.",
      category: "AI Integration",
      link: "/microsoft-azure-ai.pdf"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "IBM | Coursera",
      date: "Nov 2023",
      description: "Learned cloud architecture, infrastructure, and deployment strategies.",
      category: "Cloud",
      link: "/~.pdf"
    },
    {
      title: "Human-Centered UI/UX Design",
      issuer: "University of Toronto",
      date: "May 2022",
      description: "Studied inclusive innovation and intuitive design to build better user interfaces.",
      category: "UI / UX",
      link: "/design-thinking.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            My <span className="text-green-500">Certifications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated showcase of my professional experience, full-stack capabilities, computer science fundamentals, and modern tech integrations.
          </p>
        </div>

        {/* CERTIFICATES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-gray-900 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 border border-gray-600 group-hover:border-green-500/50 transition-colors">
                  {cert.category}
                </div>
                
                {/* Certificate Details */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-green-500/80 font-semibold text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">{cert.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* View Button */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-green-500 font-bold hover:text-green-400 transition-colors"
                >
                  View Credential <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certificates;