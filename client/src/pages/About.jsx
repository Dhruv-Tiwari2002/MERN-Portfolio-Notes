import React from 'react';

const About = () => {
  // --- EDUCATION DATA ---
  const education = [
    {
      year: "2025 - Present",
      degree: "MERN Stack Development Training",
      school: "CETPA Infotech, Sector 2, Noida",
      result: "Professional Training & Placement Program"
    },
    {
      year: "2021 - 2025",
      degree: "B.Tech in Computer Science (CSE)",
      school: "Noida Institute of Engineering and Technology",
      result: "CGPA: 6.5"
    },
    {
      year: "2020 - 2021",
      degree: "Class XII (CBSE)",
      school: "East Point School, Delhi",
      result: "70%"
    }
  ];

  // --- NEW: CONTACT DATA (Including GitHub) ---
  const contactItems = [
    { label: "Email", value: "ddhruvtiwari@gmail.com", href: "mailto:ddhruvtiwari@gmail.com", icon: "📧", color: "hover:border-blue-500" },
    { label: "Phone", value: "+91 9958988710", href: "tel:+919958988710", icon: "📞", color: "hover:border-green-500" },
    { label: "GitHub", value: "github.com/Dhruv-Tiwari2002", href: "https://github.com/Dhruv-Tiwari2002", icon: "💻", color: "hover:border-purple-500" },
    { label: "LinkedIn", value: "linkedin.com/in/dhruv-tiwari", href: "https://www.linkedin.com/in/dhruv-tiwari-556097231", icon: "🔗", color: "hover:border-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- 2. HERO SECTION --- */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-white mb-6">
            About <span className="text-green-500">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a <span className="text-green-400 font-semibold underline decoration-green-500/30 underline-offset-4">MERN Stack Developer</span> dedicated to 
            building responsive and scalable web applications with a focus on clean, 
            optimized code.
          </p>
        </div>

        {/* --- 1. THE NEW ATTRACTIVE CONTACT SECTION --- */}
        <div className="mb-16">
            <h2 className="text-center text-gray-400 uppercase tracking-widest text-sm font-bold mb-8">Let's Connect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contactItems.map((item) => (
                    <a 
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gray-800 p-5 rounded-2xl border border-gray-700 ${item.color} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 flex flex-col items-center text-center group`}
                    >
                        <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <h3 className="text-xs font-bold text-gray-500 uppercase mb-1">{item.label}</h3>
                        <p className="text-sm font-medium text-gray-200 truncate w-full">{item.value}</p>
                    </a>
                ))}
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* --- 3. EDUCATION TIMELINE --- */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="h-8 w-1 bg-green-500 rounded-full"></span>
                Education & Training
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-800 hover:border-green-500 transition-colors group">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-800 border-2 border-gray-700 group-hover:bg-green-500 group-hover:border-green-500 transition-all"></div>
                <span className="text-green-500 font-bold text-sm uppercase tracking-wider">{edu.year}</span>
                <h3 className="text-xl font-bold mt-1 group-hover:text-green-400 transition-colors">{edu.degree}</h3>
                <p className="text-gray-400">{edu.school}</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                    {edu.result}
                </div>
              </div>
            ))}
          </div>

          {/* --- 4. BEYOND CODING & INTERESTS --- */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="h-8 w-1 bg-green-500 rounded-full"></span>
                Beyond Coding
            </h2>
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-green-500/50 transition-colors">
                <p className="text-gray-400 leading-relaxed mb-6">
                    When I'm not writing code, I am a content creator. I have extensive experience in 
                    <span className="text-white font-bold"> video editing and YouTube growth</span>, 
                    having built devotional shorts channels. I apply this creative lens to 
                    building intuitive <span className="text-green-400">UI/UX designs</span>.
                </p>
                <div className="flex flex-wrap gap-3">
                    {['Exploring AI', 'Content Creation', 'Music', 'Chess', 'Good Listener', 'Playing Football', 'Stock Market'].map((item) => (
                    <span key={item} className="bg-gray-900 px-4 py-2 rounded-xl text-xs font-bold text-gray-300 border border-gray-700 hover:border-green-500 transition-colors cursor-default">
                        {item}
                    </span>
                    ))}
                </div>
            </div>
            
            {/* Quote Box */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <span className="absolute -top-4 left-6 text-4xl opacity-20 text-green-500">“</span>
                <p className="text-green-400 italic font-medium pt-2">
                  I believe that technical skills combined with creative storytelling allows for building 
                  more impactful and memorable user experiences.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;