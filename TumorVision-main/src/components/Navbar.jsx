import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // redirect ke homepage
    window.location.reload(); // refresh tampilan
  };

  return (
    <div className="bg-black px-4 md:px-12 py-4 text-white">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo TumorVision" className="w-12 h-12 object-contain" />
          <h1 className="text-[#969694] font-bold font-poppins text-base sm:text-lg">Tumor Vision</h1>
        </div>

        {/* Menu */}
        <div className="flex space-x-6 items-center text-xs ml-auto mt-4 md:mt-0">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            Home
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/analis')}>
            Analysis
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/Informasi')}>
            Informasi
          </div>

          {/* Kondisional: Tampilkan Login atau Logout */}
          {token ? (
            <>
              <div className="text-yellow-500 font-semibold hidden sm:block">Hi, User</div>
              <div className="bg-red-500 px-6 py-2 rounded-md cursor-pointer hover:bg-red-400 transition" onClick={handleLogout}>
                Logout
              </div>
            </>
          ) : (
            <div className="bg-[#E5A00D] px-6 py-2 rounded-md cursor-pointer hover:bg-yellow-400 transition" onClick={() => navigate('/login')}>
              Login
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
