import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://graphicsfamily.com/wp-content/uploads/edd/2020/05/Free-Global-Health-Care-PSD-Logo-Template-PNG-Transparent.png" alt="HealthCare Logo" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="/appointments" className="text-gray-700 hover:text-blue-600">Appointments</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/doctors" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="/appointments" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Appointments</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;