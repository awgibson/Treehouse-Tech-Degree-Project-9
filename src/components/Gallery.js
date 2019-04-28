import React from 'react';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = ({ photoData }) => {
  const photoList = photoData.map(photo => {
    return (
      <GalleryItem
        farm={photo.farm}
        server={photo.server}
        secret={photo.secret}
        id={photo.id}
        title={photo.title}
        key={photo.id}
      />
    );
  });

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photoList}
        {/* <!-- Not Found --> */}

        <NotFound />
      </ul>
    </div>
  );
};

export default Gallery;
