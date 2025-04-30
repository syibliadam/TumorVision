import { Link } from "react-router-dom";
import React from "react";
function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-jakarta px-4">
      <div className="w-full max-w-sm p-8 space-y-6">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold leading-snug">
          Lupa Password? <br />
          <span className="text-yellow-500">Tolong masukkan email Anda</span>
        </h1>

        <p className="text-center text-gray-400 text-sm">
          Masukkan alamat email yang terdaftar untuk menerima link reset password.
        </p>

        {/* Form Forgot Password */}
        <form className="space-y-4 mt-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan alamat email"
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          {/* Tombol Kirim */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200 ease-in-out"
            >
              Kirim Link Reset
            </button>
          </div>
        </form>

        {/* Link Kembali ke Login */}
        <div className="text-center text-sm mt-4">
          <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
            Kembali ke Login
          </Link>
        </div>

        {/* Link Kembali ke Home */}
        <div className="text-center text-sm mt-2">
          <Link to="/" className="text-yellow-500 font-semibold hover:underline">
            Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
