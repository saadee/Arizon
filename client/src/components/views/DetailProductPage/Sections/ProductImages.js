import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { connect } from 'react-redux'
import { getProduct, getProducts } from '../../../../_actions/product_action'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function ProductImages(props) {
  useEffect(() => {
    getProduct
  }, [getProduct])
  const Url = "http://localhost:5000"
  let mode = "left";
  if (window.innerWidth <= 700) {
    mode = "bottom";
  } else {
    mode = "left";
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "flex-wwrap",
        border: "1px solid red",
        width: "50%",
      }}
    >
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        className="carousal"
      >

        {props.details.map((item) => (
          <TabPane
            tab={
              <img
                src={Url + item}
                alt="asdasd"
                width="50"
              />
            }
            key={1}
          >
            <div
              className="carousalimg"
              style={{
                backgroundImage: `url(http://localhost${item[0]})`,
              }}
            ></div>
          </TabPane>
        ))}
        <TabPane
          tab={
            <img
              src={Url + product.images[0]}
              alt="asdasd"
              width="50"
            />
          }
          key={1}
        >
          <div
            className="carousalimg"
            style={{
              backgroundImage: `url(${Url + product.images[0]})`,
            }}
          ></div>
        </TabPane>
        <TabPane
          tab={
            <img
              src={Url + product.images[1]}
              alt="asdasd"
              width="50"
            />
          }
          key={2}
        >
          <div
            className="carousalimg"
            style={{
              backgroundImage: `url(${Url + product.images[1]})`,
            }}
          ></div>
        </TabPane>
        <TabPane
          tab={
            <img
              src={Url + product.images[2]}
              alt="asdasd"
              width="50"
            />
          }
          key={3}
        >
          <div
            className="carousalimg"
            style={{
              backgroundImage: `url(${Url + product.images[2]})`,
            }}
          ></div>
        </TabPane>
      </Tabs>
      ,
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, { getProduct })(ProductImages);

// import React, { useEffect, useState } from "react";

// import ImageGallery from "react-image-gallery";

// function ProductImages(props) {
//   const [Images, setImages] = useState([]);
//   useEffect(() => {
//     if (props.details.images && props.details.images.length > 0) {
//       let images = [];
//       props.details.images &&
//         props.details.images.map((item) => {
//           images.push({
//             original: `http://localhost:5000/${item}`,
//             thumbnail: `http://localhost:5000/${item}`,
//           });
//         });
//       setImages(images);
//     }
//   }, [props.details]);
//   return (
//     <div>
//       <ImageGallery
//         showPlayButton={false}
//         items={Images}
//         style={{ border: "1px solid red", width: "200px", height: "200px" }}
//       />
//     </div>
//   );
// }

// export default ProductImages;
