// src/Pages/InformasiDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { tumorArticles } from '../Data/tumorArticles';
import Navbar from '../components/Navbar';

const InformasiDetail = () => {
  const { id } = useParams();
  const article = tumorArticles[id.toString()]; // <- pastikan string!

  if (!article) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Data tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-orange-400">{article.name}</h1>
        <p className="text-gray-400 text-sm mb-6">
          {article.date} · {article.author}
        </p>

        {article.content.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="text-xl font-semibold mt-8 mb-2 text-orange-300">
                {block.text}
              </h2>
            );
          }
          if (block.type === 'paragraph') {
            return (
              <p key={index} className="mb-4 text-gray-300">
                {block.text}
              </p>
            );
          }
          if (block.type === 'image') {
            return <img key={index} src={block.src} alt={block.alt} className="rounded-lg my-6 w-full object-cover" />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default InformasiDetail;
