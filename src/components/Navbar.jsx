import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Handler for internship button
  const handleEnroll = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfOH0_mC9pBH7PVvBoHbouJeVjHzTNBLCHEx5KOVPUSL_yrog/viewform?embedded=true",
      "_blank"
    );
  };

  // Handler for navigation clicks
  const handleNavClick = () => {
    // Ensure smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600" onClick={handleNavClick}>
          SkillCertify
        </Link>

        {/* Centered Nav Links */}
        <div className="flex-1 flex justify-center">
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
        </div>

        {/* Apply for Internship Button */}
        {/* <div className="hidden md:flex">
          <a
            href="https://forms.gle/irN9CaHpZpXkrX8t8"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-200 border-2 border-blue-600"
            style={{ letterSpacing: "0.5px" }}
          >
            Apply for Internship
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
