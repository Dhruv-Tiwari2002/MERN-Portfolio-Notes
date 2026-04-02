import { Link } from 'react-router-dom';

const Home = () => {

  // --- NEW: Smooth Scroll Logic ---
  const scrollToProjects = (e) => {
    e.preventDefault(); // Prevents the default sudden jump
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-white font-sans min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="text-center py-24 px-5 bg-gray-900">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-green-500 tracking-tight">
          Dhruv Tiwari
        </h1>
        <h2 className="text-2xl md:text-3xl font-normal text-gray-300 mb-8">
          Full Stack MERN Developer
        </h2>
        <p className="max-w-2xl mx-auto mb-10 leading-relaxed text-gray-400 text-lg">
          I build secure, scalable, and responsive web applications. Passionate about turning complex problems into elegant solutions using MongoDB, Express, React, and Node.js.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link 
            to="/register" 
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg"
          >
            Try My App
          </Link>
          
          {/* --- UPDATED: View Work Button with Smooth Scroll & Glow Effect --- */}
          <a 
            href="#projects" 
            onClick={scrollToProjects}
            className="px-6 py-3 bg-transparent text-green-500 border-2 border-green-500 font-bold rounded-lg hover:bg-green-500 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-green-500/40"
          >
            View Work
          </a>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="py-20 px-5 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-10 text-white">Technical Arsenal</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'Git/GitHub'].map(skill => (
            <span 
              key={skill} 
              className="bg-gray-700 px-5 py-2 rounded-full border border-green-500 text-gray-200 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* --- FEATURED PROJECT SECTION --- */}
      <section id="projects" className="py-20 px-5 bg-gray-900">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">Featured Project</h3>
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-700 shadow-2xl">
          <div>
            <h4 className="text-3xl font-bold mb-3 text-green-500">Secure Notes Platform</h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              A full-stack application that allows users to securely register, login, and manage their personal notes. Built to demonstrate proficiency in RESTful API design, state management, and user authentication.
            </p>
          </div>
          
          <div>
            <h5 className="text-gray-400 font-semibold mb-3 text-lg">Key Features:</h5>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
              <li>User authentication using JSON Web Tokens (JWT).</li>
              <li>Password hashing using bcrypt for database security.</li>
              <li>Full CRUD (Create, Read, Update, Delete) functionality.</li>
              <li>Responsive React frontend communicating with an Express backend.</li>
            </ul>
          </div>
          
          <Link 
            to="/register" 
            className="self-start px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-md mt-2"
          >
            Create an Account to Test it Live
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;