import { useState } from "react";
import React from "react";
function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }
    // Simulasi pengiriman password baru ke backend
    alert("Password berhasil diubah!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white font-jakarta px-4">
      <div className="w-full max-w-sm p-8 space-y-6">
        <h1 className="text-center text-3xl font-bold leading-snug">
          Ubah Password
        </h1>
        <p className="text-center text-gray-400 text-sm">
          Masukkan password baru Anda
        </p>

        <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="newPassword" className="text-sm font-medium">Password Baru</label>
            <input
              id="newPassword"
              type="password"
              placeholder="Masukkan password baru"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">Konfirmasi Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Konfirmasi password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-200 ease-in-out"
            >
              Ubah Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
