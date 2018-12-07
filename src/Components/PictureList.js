import React from "react";
import PropTypes from "prop-types";
import Picture from "./Picture";
import NotFound from "./NotFound";

const PictureList = props => {
  console.log("Props:")
  console.log(props)

  const results = props.data;
  // let url = results.photos.photo;
  console.log("results")
  console.log(results)
  let photos;

  if (results.length) {
    photos = results.map(photo =>
      <Picture
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      key={photo.id}
      />

    );

  } else {
    photos = <NotFound />
  }

  return(
    <ul className="gif-list">
      {photos}
    </ul>
  );
}

export default PictureList;
