//This component holds the image gallery

//Bring in dependencies
import React from 'react';

//Bring in components
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = ({ photoData }) => {
  let photoList = ['']; //Declare empty array

  //Conditional checks if there are photos.
  //If there are photos, the data is mapped to a GalleryItem component passing in the props
  //needed to build the image URL.
  //If there are no photos found, the Not Found component is loaded showing there are no results
  if (photoData.length > 0) {
    photoList = photoData.map(photo => (
      <GalleryItem
        farm={photo.farm}
        server={photo.server}
        secret={photo.secret}
        id={photo.id}
        title={photo.title}
        key={photo.id}
      />
    ));
  } else {
    photoList = <NotFound />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      {/* Displays either the photos or the not found component */}
      <ul>{photoList}</ul>
    </div>
  );
};

export default Gallery;
