import React from 'react';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = ({ photoData, match, handleFetch, q }) => {
  // if (match.params.query && match.params.query !== q) {
  //   console.log(match.params.query, ' is the query before call');
  //   handleFetch('taco');
  //   console.log(q, ' is the params after call');
  // } else {
  //   handleFetch('dog');
  // }
  console.log(photoData);
  let photoList = [''];
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
      <ul>{photoList.length === 0 ? <h2>loading...</h2> : photoList}</ul>
    </div>
  );
};

export default Gallery;
