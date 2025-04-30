import { Link } from "react-router-dom";
import React from "react";
function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-jakarta px-4">
      <div className="w-full max-w-sm p-8 space-y-6">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold leading-snug">
          Selamat Datang di Website <br />
          <span className="text-yellow-500">Tumor Vision!</span>
        </h1>

        <p className="text-center text-gray-400 text-sm">
          Daftarkan Akun sekarang juga untuk menikmati fitur kami!
        </p>

        {/* Form Login */}
        <form className="space-y-4 mt-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Masukan alamat Email"
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          {/* Tombol Login */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>

        {/* Link Kembali ke Home */}
        <div className="text-center text-sm mt-4">
          <Link to="/" className="text-yellow-500 font-semibold hover:underline">
            Kembali ke Home
          </Link>
        </div>

        {/* Link Forgot Password */}
        <div className="text-center text-sm mt-2">
          <Link to="/forgot-password" className="text-yellow-500 font-semibold hover:underline">
            Lupa Password?
          </Link>
        </div>

        {/* Link ke Register */}
        <p className="text-center text-sm mt-2">
          Belum Punya Akun?{" "}
          <Link to="/register" className="text-yellow-500 font-semibold hover:underline">
            Daftar Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
