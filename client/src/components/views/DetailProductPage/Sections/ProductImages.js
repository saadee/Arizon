import React, { useEffect, useState } from "react";

import ImageGallery from "react-image-gallery";

function ProductImages(props) {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    if (props.details.images && props.details.images.length > 0) {
      let images = [];
      props.details.images &&
        props.details.images.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`,
          });
        });
      setImages(images);
    }
  }, [props.details]);
  return (
    <div>
      <ImageGallery
        showPlayButton={false}
        items={Images}
        style={{ border: "1px solid red", width: "200px", height: "200px" }}
      />
    </div>
  );
}

export default ProductImages;
