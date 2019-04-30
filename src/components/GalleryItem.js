// Bring in dependencies
import React from 'react';

const GalleryItem = ({ server, farm, id, secret, title }) => {
  return (
    <li>
      {/* Build the url per the API documentation */}
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
      />
    </li>
  );
};

export default GalleryItem;
