import { SiPhotobucket } from 'react-icons/si';
import PhotoForm from '../components/PhotoForm/PhotoForm';
import React from 'react';

export default function Header({ setPhotos }) {
  return (
    <header className='flex flex-wrap justify-between p-8'>
      <div className='flex items-start gap-4'>
        <h1 className='text-5xl font-logo'>
            <span className='flex items-center justify-center gap-4'>
              PHOTO <SiPhotobucket size='60' className='inline' />
            </span>
          <div className='text-6xl'>
            GALLERY
          </div>
        </h1>
      </div>
      <div>
        <PhotoForm setPhotos={setPhotos} />
      </div>
    </header>
  );
}