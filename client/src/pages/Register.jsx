import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api';

const Register = () => {
  // Notice added 'name' here!
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      await register(formData);
      alert("Registration Successful! You can now log in.");
      navigate('/login'); // Send them to login page after success
    } catch (err) {
      alert("Registration failed. Try a different email.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              placeholder="Seeta Ram" 
              value={formData.name} // Makes this a controlled input
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={formData.email} // Makes this a controlled input
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={formData.password} // Makes this a controlled input
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition mt-4 shadow-md"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;