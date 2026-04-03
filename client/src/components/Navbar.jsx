import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    // EXISTING LOGIC (Untouched)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        window.location.reload();
    };

    const closeMenu = () => setIsOpen(false);

    // --- NEW: THE DATA ARRAY (Interview-Ready Pattern) ---
    // If you ever need to add a new page, you ONLY add it here!
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Certificates", path: "/certificates" },
    ];

    return (
        <nav className="bg-gray-900 border-b border-gray-800 shadow-md sticky top-0 z-50">
            {/* Main Navbar Container */}
            <div className="flex items-center justify-between px-6 py-4">

                {/* Left Side: Brand Name */}
                <div>
                    <Link to="/" onClick={closeMenu} className="text-2xl font-bold text-green-500 hover:text-green-400 transition tracking-tight">
                        Portfolio
                    </Link>
                </div>

                {/* --- HAMBURGER BUTTON --- */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* --- DESKTOP MENU (Hidden on small screens) --- */}
                <div className="hidden md:flex items-center gap-6">

                    {/* NEW: Array Mapping for standard links */}
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="text-gray-300 hover:text-white transition font-medium">
                            {link.name}
                        </Link>
                    ))}

                    {/* Auth Links & Resume */}
                    {token ? (
                        <>
                            <Link to="/dashboard" className="text-gray-300 hover:text-white transition font-medium">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-5 rounded-lg transition shadow-sm"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-300 hover:text-white transition font-medium">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-5 rounded-lg transition shadow-sm"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {/* Resume Download Button */}
                    <a
                        href="/resume.pdf"
                        download="Dhruv_Tiwari_Resume.pdf"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg transition shadow-sm ml-2"
                    >
                        Resume
                    </a>
                </div>
            </div>

            {/* --- MOBILE DROPDOWN MENU --- */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-gray-900">

                    {/* NEW: Array Mapping for Mobile Links */}
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} onClick={closeMenu} className="text-gray-300 hover:text-white transition font-medium block">
                            {link.name}
                        </Link>
                    ))}

                    {token ? (
                        <>
                            <Link to="/dashboard" onClick={closeMenu} className="text-gray-300 hover:text-white transition font-medium block">
                                Dashboard
                            </Link>
                            <button
                                onClick={() => { handleLogout(); closeMenu(); }}
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-5 rounded-lg transition shadow-sm w-full text-left"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={closeMenu} className="text-gray-300 hover:text-white transition font-medium block">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                onClick={closeMenu}
                                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-5 rounded-lg transition shadow-sm inline-block text-center"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {/* Resume Download Button (Mobile) */}
                    <a
                        href="/resume.pdf"
                        download="Dhruv_Tiwari_Resume.pdf"
                        onClick={closeMenu}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg transition shadow-sm block text-center mt-2"
                    >
                        Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
}