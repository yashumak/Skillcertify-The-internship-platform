import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "../utils/auth.js";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Check if user is logged in
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, [location.pathname]); // Re-check when route changes

  const handleEnroll = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfOH0_mC9pBH7PVvBoHbouJeVjHzTNBLCHEx5KOVPUSL_yrog/viewform?embedded=true",
      "_blank"
    );
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16 justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
          onClick={handleNavClick}
        >
          SkillCertify
        </Link>

        {/* Nav Links (Center) */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-gray-100 text-black"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* User Menu / Login / Sign Up Buttons */}
        <div className="hidden md:flex items-center">
          {user ? (
            // User is logged in - show user menu
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-700">
                Welcome, <span className="font-semibold">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold shadow-md hover:bg-red-700 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            // User is not logged in - show login/signup buttons
            <>
              <Link
                to="/login"
                className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-200 border-2 border-blue-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-200 border-2 border-blue-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
