import { Fragment } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList({ photos, setPhotos }) {
  return (
    <div className='carousel w-full carousel-center  p-4 space-x-4 bg-neutral rounded-box'>
      {
        photos.length > 0 && photos.map((photo) => {
          return (
            <Fragment key={photo.id}>
              <GalleryItem setPhotos={setPhotos} photo={photo} />
            </Fragment>
          );
        })
      }
    </div>
  );
}