import axios from "axios";

export const onDrop = (files) => async (dispatch) => {
  let formData = new FormData();
  let config = {
    headers: { "content-Type": "multipart/form-data" },
  };
  formData.append("file", files[0]);
  try {
    const res = await axios.post("/api/product/uploadImage", formData, config);
    dispatch({
      type: "UPLAOD_IAMGE",
      payload: res.data.image,
    });
  } catch (error) {
    alert("Failed to save the image");
  }
};

export const UploadProduct = ({
  title,
  description,
  price,
  category,
  images,
}) => async (dispatch) => {
  const body = { title, description, price, category, images };
  try {
    console.log("Body", body);
    const res = await axios.post("/api/product/uploadProduct", body);
    dispatch({
      type: "PRODUCT_UPLAODED",
      payload: res.data,
    });
    alert("Successfully Uploaded");
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: "REGISTER_FAIL",
    });
    alert("Failed!! retry")
  }
};
// get posts
export const getProducts = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/product/getProducts');

		dispatch({
			type: 'GET_PRODUCTS',
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: 'POSTS_ERR',
			payload: { msg: err.message },
		});
	}
};
