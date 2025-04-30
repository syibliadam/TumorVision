import { Link } from "react-router-dom";
import LogoTumorVision from "../assets/register-icon.png";
import React from "react";
function Register() {
    return (
      <div className="flex min-h-screen bg-black font-jakarta">
        {/* Bagian Kiri - Logo / Gambar */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={LogoTumorVision}
            alt="Tumor Vision Logo"
            className="max-w-xs"
          />
        </div>
  
        {/* Bagian Kanan - Form Register */}
        <div className="w-1/2 flex items-center justify-center text-white px-8">
          <div className="w-full max-w-md space-y-6">
            <h1 className="text-4xl font-bold">Register</h1>
            <p className="text-gray-400">Daftar sekarang untuk membuat akun</p>
  
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  placeholder="Masukan Nama"
                  className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                  required
                />
              </div>
  
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Masukan alamat Email"
                  className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                  required
                />
              </div>
  
              <div className="flex flex-col space-y-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                  required
                />
              </div>
  
              <div className="flex flex-col space-y-2">
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                  required
                />
              </div>
  
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200 ease-in-out"
              >
                Daftar Sekarang
              </button>
            </form>
  
            <p className="text-center text-sm mt-4">
              sudah punya akun?{" "}
              <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;