// File: PersonalInfo.js
import React from 'react';
import foto from './Fotobyuu.jpeg'

const PersonalInfo = () => {
  return (
    <div>
      <img src={foto} alt="Profile" style={{ borderRadius: '50%', width: '250px' }} />
      <p>Nama Lengkap : Bayu Kresna Mukti</p>
      <p>Pendidikan : 10 RPL 2 || SMKN 1 Sukatani</p>
      <p>Umur : 17</p>
    </div>
  );
};

export default PersonalInfo;
