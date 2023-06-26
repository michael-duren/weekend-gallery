import React, {useEffect, useState} from 'react';
import GalleryList from "../GalleryList/GalleryList";
import {SiPhotobucket} from 'react-icons/si'
import axios from 'axios'

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get('/gallery')
      .then(response => response.data)
      .then(setPhotos)
  }, [])

  return (
    <div className="min-h-[100vh]">
      <header className="flex justify-center p-8">
        <div className="flex items-start gap-4">
          <h1 className="text-5xl font-logo">
            <span className="flex items-center justify-center gap-4">
              PHOTO <SiPhotobucket size="60" className="inline"/>
            </span>
            <div className="text-6xl">
              GALLERY
            </div>
          </h1>
        </div>
      </header>
      <main className="absolute top-[50%] w-[80vw] 
      left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <GalleryList photos={photos}/>
      </main>
    </div>);
}

export default App;
