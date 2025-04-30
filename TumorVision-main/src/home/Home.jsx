import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../assets/home-herosection.png';
import HomeRepeat from '../assets/home-repeat-icon.png';
import HomeGlobe from '../assets/home-globe-icon.png';
import gliomaImg from '../assets/glioma.png';
import meningiomaImg from '../assets/meniogma.png';
import notumorImg from '../assets/Notumor.png';
import pituitaryImg from '../assets/pituary.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  const tumorData = [
    {
      name: 'Glioma',
      prediction: 'Glioma',
      cancerous: 'Yes',
      symptoms: 'Frequent Headaches, Seizures, Nausea, Vomiting, Blurred Vision, Memory Loss, Difficulty Speaking, Weakness in Limbs, Loss of Balance.',
      image: gliomaImg,
    },
    {
      name: 'Meningioma',
      prediction: 'meningioma',
      cancerous: 'Yes',
      symptoms: 'Frequent Headaches, Seizures, Nausea, Vomiting, Blurred Vision, Memory Loss, Difficulty Speaking, Weakness in Limbs, Loss of Balance.',
      image: meningiomaImg,
    },
    {
      name: 'Notumor',
      prediction: 'Notumor',
      cancerous: 'Yes',
      symptoms: 'Frequent Headaches, Seizures, Nausea, Vomiting, Blurred Vision, Memory Loss, Difficulty Speaking, Weakness in Limbs, Loss of Balance.',
      image: notumorImg,
    },
    {
      name: 'Pituitary',
      prediction: 'Pituitary',
      cancerous: 'Yes',
      symptoms: 'Frequent Headaches, Seizures, Nausea, Vomiting, Blurred Vision, Memory Loss, Difficulty Speaking, Weakness in Limbs, Loss of Balance.',
      image: pituitaryImg,
    },
  ];

  return (
    <div className="bg-black pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-12 flex flex-col md:flex-row px-4 md:px-12 gap-8 items-center">
        <div className="w-full md:w-[35%] animate-floating">
          <img src={HeroSection} alt="Hero" className="w-full object-contain" />
        </div>
        <div className="w-full md:w-[65%] text-white space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold">Membantu Diagnosis Tumor Otak dengan Teknologi AI</h1>
          <p className="text-base md:text-lg font-thin">
            Membantu dalam proses diagnosis tumor otak dengan teknologi terbaru. Sistem ini mengolah data pemindaian otak menjadi informasi yang lebih jelas, sehingga dapat mendukung tenaga medis dalam mengambil keputusan yang lebih baik
            untuk perawatan pasien
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/login" className="bg-[#E5A00D] w-fit px-5 py-3 text-xs font-semibold rounded-md cursor-pointer hover:bg-yellow-400 transition">
              Coba Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="mt-24 flex flex-col md:flex-row justify-center items-center gap-16 px-4 md:px-8">
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Hasil Deteksi Tumor Otak Anda</h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">Berikut adalah hasil diagnosis dari sistem, yang memberikan gambaran lebih jelas mengenai kemungkinan jenis tumor yang terdeteksi.</p>
        </div>

        <div className="w-full md:w-1/2 max-w-lg bg-[#1e1e1e] rounded-3xl p-8 flex flex-col items-center space-y-6">
          <h2 className="text-xl font-bold text-[#E5A00D]">Hasil Diagnosa</h2>
          <div className="flex flex-col sm:flex-row items-start w-full gap-6">
            <img src={gliomaImg} alt="MRI Result" className="w-36 h-36 object-cover rounded-md" />
            <div className="flex flex-col w-full space-y-3 text-sm">
              <div className="text-white">
                <div className="flex justify-between">
                  <span>Glioma:</span>
                  <span>0.00%</span>
                </div>
                <div className="h-[2px] bg-gray-400 mt-1"></div>
              </div>
              <div className="text-white">
                <div className="flex justify-between">
                  <span>Meningioma:</span>
                  <span>0.00%</span>
                </div>
                <div className="h-[2px] bg-gray-400 mt-1"></div>
              </div>
              <div className="text-white">
                <div className="flex justify-between">
                  <span>Pituitary:</span>
                  <span>100.00%</span>
                </div>
                <div className="h-[2px] bg-[#E5A00D] mt-1"></div>
              </div>
              <div className="text-white">
                <div className="flex justify-between">
                  <span>No tumor:</span>
                  <span>0.00%</span>
                </div>
                <div className="h-[2px] bg-gray-400 mt-1"></div>
              </div>
            </div>
          </div>
          <p className="text-white text-center text-sm mt-4">
            Confident: <span className="text-[#E5A00D] font-semibold">100.00%</span> on <span className="text-[#E5A00D] font-semibold">Pituitary</span>
          </p>
        </div>
      </section>

      {/* Jenis Tumor Section */}
      <section className="mt-24 px-4">
        <h2 className="text-white text-center text-3xl md:text-5xl font-semibold">Jenis Tumor</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto w-fit">
          {tumorData.map((tumor) => (
            <div key={tumor.name} className="flex flex-col sm:flex-row gap-6 bg-neutral-800/90 rounded-3xl p-6 shadow-lg max-w-xl">
              <img src={tumor.image} alt={tumor.name} className="w-40 h-40 object-cover rounded-xl" />
              <div className="text-neutral-200 text-sm leading-relaxed space-y-1">
                <h3 className="text-amber-400 text-2xl font-semibold mb-2">{tumor.name}</h3>
                <p>
                  <span className="text-gray-400">Model Prediction: </span>
                  <span className="text-white">{tumor.prediction}</span>
                </p>
                <p>
                  <span className="text-gray-400">Cancerous: </span>
                  <span className="text-white">{tumor.cancerous}</span>
                </p>
                <p>
                  <span className="text-gray-400">Symptoms: </span>
                  <span className="text-white">{tumor.symptoms}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Card Section */}
      <section className="mt-24 px-4">
        <div className="mb-12">
          <h1 className="text-white text-center text-xl md:text-2xl w-full md:w-[60%] mx-auto">
            Teknologi ini menggunakan algoritma kecerdasan buatan (AI) untuk membantu dalam pencitraan medis dan diagnosis tumor otak. Dengan AI, proses identifikasi bisa lebih cepat dan mendukung dokter dalam mengambil keputusan yang lebih
            tepat.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="bg-[#8080803D] p-4 rounded-md transform transition duration-300 hover:rotate-1 hover:scale-105 hover:shadow-lg cursor-pointer w-[90%] sm:w-[320px]">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img src={HomeRepeat} alt="" className="w-6 h-6" />
              <h2 className="text-xl md:text-2xl text-[#E5A00D] font-bold">Effiency</h2>
            </div>
            <p className="text-sm text-white text-justify">
              Sistem ini dirancang agar bisa berjalan dengan sedikit intervensi manusia. Dengan begitu, AI dapat membantu dokter dalam mendeteksi pola yang mungkin sulit terlihat, namun tetap memerlukan konfirmasi dan analisis lebih lanjut
              oleh tenaga medis.
            </p>
          </div>

          <div className="bg-[#8080803D] p-4 rounded-md transform transition duration-300 hover:rotate-1 hover:scale-105 hover:shadow-lg cursor-pointer w-[90%] sm:w-[320px]">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img src={HomeRepeat} alt="" className="w-6 h-6" />
              <h2 className="text-xl md:text-2xl text-[#E5A00D] font-bold">Robust Performance</h2>
            </div>
            <p className="text-sm text-white text-justify">
              Dengan bantuan AI, waktu yang dibutuhkan untuk menganalisis gambar medis bisa lebih singkat dibandingkan dengan cara tradisional. Hal ini dapat membantu dokter dalam memberikan hasil diagnosis lebih cepat, sehingga perawatan
              bisa segera dilakukan.
            </p>
          </div>

          <div className="bg-[#8080803D] p-4 rounded-md transform transition duration-300 hover:rotate-1 hover:scale-105 hover:shadow-lg cursor-pointer w-[90%] sm:w-[320px]">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img src={HomeGlobe} alt="" className="w-6 h-6" />
              <h2 className="text-xl md:text-2xl text-[#E5A00D] font-bold">Scalable</h2>
            </div>
            <p className="text-sm text-white text-justify">
              Teknologi ini dibuat agar dapat digunakan di berbagai lingkungan medis, baik di rumah sakit besar maupun klinik spesialis. Dengan integrasi yang mudah, sistem ini bisa menjadi alat tambahan yang membantu dalam proses
              diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnosa Sekarang Section */}
      <section className="mt-24 px-4">
        <div className="bg-[#1e1e1e] rounded-3xl py-14 px-6 max-w-[700px] mx-auto flex flex-col items-center space-y-4 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 text-center">Diagnosa Sekarang</h2>
          <p className="text-gray-500 text-center text-sm max-w-md leading-relaxed">Unggah Foto penyakit anda ke dalam kotak dan dapatkan informasi penyakit tersebut</p>
          <Link
            to="/analis"
            className="bg-[#E5A00D] hover:bg-yellow-400 text-white font-semibold py-2 px-10 rounded-lg shadow-md transition text-sm mt-5 cursor-pointer"
            onClick={(e) => {
              if (!localStorage.getItem('token')) {
                e.preventDefault();
                window.location.href = '/login';
              }
            }}
          >
            Unggah Foto
          </Link>
          <p className="text-gray-500 text-xs mt-2">Unggah Foto Penyakit anda disini</p>
          <div className="w-full flex justify-center mt-3">
            <div className="border-t border-white w-[170px]"></div>
          </div>
          <div className="flex flex-col items-center space-y-2 mt-2">
            <p className="text-gray-500 text-[11px] text-center">
              Dapatkan Akurasi yang akurat <br /> dengan <span className="text-[#E5A00D] font-semibold">TUMOR VISION</span>
            </p>
            <div className="flex gap-1 mt-2">
              <img src={gliomaImg} alt="Glioma" className="w-8 h-8 object-cover rounded-md" />
              <img src={meningiomaImg} alt="Meningioma" className="w-8 h-8 object-cover rounded-md" />
              <img src={notumorImg} alt="Notumor" className="w-8 h-8 object-cover rounded-md" />
              <img src={pituitaryImg} alt="Pituitary" className="w-8 h-8 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
