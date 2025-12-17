import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d545e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Prime</span>
              <span className="text-[#e1b382]">Events</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable experiences through premium event management and brand experiences that leave lasting impressions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                <LinkedIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e1b382]">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e1b382]">Our Services</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Corporate Events
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Team Meetings
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Product Launches
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Retail Branding
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Event Production
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e1b382]">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#e1b382] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business Plaza<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#e1b382]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#e1b382]" />
                <span className="text-gray-300">info@primxp.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} PrimXP. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;