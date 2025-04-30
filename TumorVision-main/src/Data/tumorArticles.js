// src/data/tumorArticles.js
import gliomaImg from '../assets/glioma.png';
import meningiomaImg from '../assets/meniogma.png';
import notumorImg from '../assets/Notumor.png';
import pituitaryImg from '../assets/pituary.png';

export const tumorArticles = {
  1: {
    name: 'Glioma',
    tag: 'Jenis Tumor',
    image: gliomaImg,
    author: 'Dr. Anisa H.',
    date: '28 Apr 2025',
    content: [
      { type: 'paragraph', text: 'Glioma adalah tumor yang berasal dari sel glial di otak atau sumsum tulang belakang.' },
      { type: 'image', src: gliomaImg, alt: 'MRI Glioma' },
      { type: 'heading', text: 'Apa saja gejala Glioma?' },
      { type: 'paragraph', text: 'Gejala umum termasuk sakit kepala berkepanjangan, kejang, gangguan penglihatan, dan kelemahan anggota tubuh.' },
    ],
  },
  2: {
    name: 'Meningioma',
    tag: 'Jenis Tumor',
    image: meningiomaImg,
    author: 'Dr. Budi Y.',
    date: '27 Apr 2025',
    content: [
      { type: 'paragraph', text: 'Meningioma adalah tumor dari meninges, biasanya jinak.' },
      { type: 'image', src: meningiomaImg, alt: 'MRI Meningioma' },
    ],
  },
  3: {
    name: 'Notumor',
    tag: 'Kesehatan Otak',
    image: notumorImg,
    author: 'Dr. Clara P.',
    date: '25 Apr 2025',
    content: [{ type: 'paragraph', text: 'Notumor berarti tidak ditemukan massa tumor. Perlu pemantauan lanjutan.' }],
  },
  4: {
    name: 'Pituitary',
    tag: 'Jenis Tumor',
    image: pituitaryImg,
    author: 'Dr. Dimas K.',
    date: '24 Apr 2025',
    content: [{ type: 'paragraph', text: 'Tumor pituitari memengaruhi kelenjar hormon. Bisa memicu gangguan penglihatan dan perubahan berat badan.' }],
  },
};
