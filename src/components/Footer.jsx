import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">SkillCertify</h2>
          <p className="text-sm mb-4">
            Empowering careers through quality education and recognized
            certifications.
          </p>
          <div className="flex space-x-4 text-gray-600">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-3">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/courses/full-stack-development">Web Development</Link>
            </li>
            <li>
              <Link to="/courses/data-science-fundamentals">
                Data Science & AI
              </Link>
            </li>
            <li>
              <Link to="/courses/uiux-design-masterclass">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/courses/digital-marketing-strategies">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/courses">View All Courses</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-md font-semibold text-gray-900 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookies">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/refund">Refund Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 SkillCertify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
