import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api'; // Keeping the real API connection!

//js logic for login page, form handling, and API interaction.
const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending data:", formData);
        
        try {
            const { data } = await login(formData);
            localStorage.setItem('token', data.token); // Keeping the real auth!
            navigate('/dashboard'); 
        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            alert('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input 
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition mt-4 shadow-md"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;