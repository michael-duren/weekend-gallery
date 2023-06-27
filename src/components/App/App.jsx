import React, {useEffect, useState} from 'react';
import GalleryList from "../GalleryList/GalleryList";
import {SiPhotobucket} from 'react-icons/si'
import axios from 'axios'
import agent from "../../Api/agent";
import PhotoForm from "../PhotoForm/PhotoForm";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    agent.Photos.listAll().then(setPhotos)
  }, [])
  
  return (
    <div className="min-h-[100vh]">
      <header className="flex flex-wrap justify-between p-8">
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
        <div>
          <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
              Add Photo
            </div>
            <PhotoForm />
          </div>
        </div>
      </header>
      <main className="mt-20">
        <GalleryList setPhotos={setPhotos} photos={photos}/>
      </main>
      <footer className="absolute w-max right-[50%] transform translate-x-1/2 bottom-20">
      </footer>
    </div>);
}

export default App;
