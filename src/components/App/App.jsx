import React, { useEffect, useRef, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import { SiPhotobucket } from 'react-icons/si';
import axios from 'axios';
import agent from '../../Api/agent';
import PhotoForm from '../PhotoForm/PhotoForm';
import Header from '../../Header/Header';

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    agent.Photos.listAll().then(setPhotos);
  }, []);

  return (
    <div className='min-h-[100vh]'>
      <Header setPhotos={setPhotos} />
      <main className='mt-20'>
        <GalleryList setPhotos={setPhotos} photos={photos} />
      </main>
      <footer className='absolute w-max right-[50%] transform translate-x-1/2 bottom-20'>
      </footer>
    </div>);
}

export default App;
