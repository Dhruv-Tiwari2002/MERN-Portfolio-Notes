import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
// The Navbar is imported here so it can be placed outside the Routes, making it a global component.
import Navbar from './components/Navbar';

// --- PAGES ---
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    // <BrowserRouter> wraps the entire app to enable React client-side routing
    <BrowserRouter>
      {/* Main container with Tailwind classes for a dark theme that covers the full screen height */}
      <div className="bg-gray-900 min-h-screen">
        
        {/* Navbar sits OUTSIDE of <Routes> so it stays visible on every single page */}
        <Navbar /> 
        
        {/* <Routes> acts like a switch statement. It looks at the current URL in the browser and renders ONLY the matching <Route> */}
        <Routes>
          
          {/* --- PUBLIC PORTFOLIO ROUTES --- */}
          {/* These pages are the face of the portfolio. They are visible to anyone, even if they aren't logged in. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          
          {/* --- AUTHENTICATION ROUTES --- */}
          {/* Pages for users to create an account or sign in to the Notes app. */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* --- PRIVATE APP ROUTE --- */}
          {/* The Notes CRUD app dashboard. (Note: In a larger production app, this could be wrapped in a 'Protected Route' to forcefully block logged-out users from navigating here directly) */}
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;