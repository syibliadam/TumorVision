import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 bg-[#1e1e1e] py-12 text-gray-400 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Brand Info */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white">TumorVision</h2>
          <p className="max-w-xs text-sm leading-relaxed">
            TumorVision membantu dalam mendeteksi jenis tumor otak
            menggunakan teknologi AI canggih untuk mendukung diagnosis medis.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-[#E5A00D]">LinkedIn</a>
            <a href="#" className="hover:text-[#E5A00D]">Instagram</a>
            <a href="#" className="hover:text-[#E5A00D]">Twitter</a>
          </div>
          
        </div>

        {/* Sitemap */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-bold mb-2">Sitemap</h3>
          <Link to="/" className="hover:text-[#E5A00D]">Beranda</Link>
          <Link to="/fitur" className="hover:text-[#E5A00D]">Fitur</Link>
          <Link to="/informasi" className="hover:text-[#E5A00D]">Informasi</Link>
          <Link to="/kontak" className="hover:text-[#E5A00D]">Kontak</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-bold mb-2">Company</h3>
          <Link to="/teams" className="hover:text-[#E5A00D]">Teams</Link>
          <Link to="/karir" className="hover:text-[#E5A00D]">Karir</Link>
          <Link to="/bantuan" className="hover:text-[#E5A00D]">Bantuan</Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-bold mb-2">Resources</h3>
          <a href="#" className="hover:text-[#E5A00D]">Marketplace</a>
          <a href="#" className="hover:text-[#E5A00D]">Subscriptions</a>
          <a href="#" className="hover:text-[#E5A00D]">Testimonials</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-bold mb-2">Keep in touch</h3>
          <p className="text-sm">Never miss any news from us, subscribe now</p>
          <div className="flex items-center space-x-2 mt-2">
            <input type="email" placeholder="Your email" className="p-2 rounded-md text-black text-sm" />
            <button className="bg-[#E5A00D] hover:bg-yellow-400 text-white p-2 rounded-md text-sm">➤</button>
          </div>
        </div>

      </div>
      
      <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2025 TumorVision All rights reserved.</p>
        <p>12,290,526 tumor scan cepat dan akurat</p>
      </div>
    </footer>
  );
}

export default Footer;
