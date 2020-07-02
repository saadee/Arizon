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
  subcategory,
}) => async (dispatch) => {
  const body = { title, description, price, category, images, subcategory };
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
    alert("Failed!! retry");
  }
};

// Get Men's Denim

export const getMensDenim = (variable) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product/getMensDenim", variable);

    dispatch({
      type: "GET_MENS_DENIM",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.message },
    });
  }
};// Get Men's Shirts

export const getMensShirts = (variable) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product/getMensShirts", variable);

    dispatch({
      type: "GET_MENS_SHIRTS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.message },
    });
  }
};// Get Men's T-shirts

export const getMensTshirts = (variable) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product/getMensTshirts", variable);

    dispatch({
      type: "GET_MENS_TSHIRTS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.message },
    });
  }
};// Get Men's Shoes

export const getMensShoes = (variable) => async (dispatch) => {
  try {
    const res = await axios.post("/api/product/getMensShoes", variable);

    dispatch({
      type: "GET_MENS_SHOES",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.message },
    });
  }
};

// get post bu id
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/product/${id}`);

    dispatch({
      type: "GET_PRODUCT",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.message },
    });
  }
};
export const addToCart = (variable) => async (dispatch) => {
  const { id} = variable;
  try {
    const res = await axios.post(`/api/product/${id}`,variable);

    dispatch({
      type: "ADD_TO_CART",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "CART_ERR",
      payload: { msg: err.message },
    });
  }
};
export const delFromCart = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/product/${id}`);

    dispatch({
      type: "DEL_FROM_CART",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "POSTS_ERR",
      payload: { msg: err.message },
    });
  }
};
