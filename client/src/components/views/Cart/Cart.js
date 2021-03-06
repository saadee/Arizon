import React,{useState} from "react";
import "./cart.css";
import { Empty, Button, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { delFromCart } from "../../../_actions/product_action";
import { Link } from "react-router-dom";

const Cart = ({ delFromCart, cart }) => {

  console.log(cart)

  const [mainCart , setMainCart]=useState(cart);
  console.log(mainCart)
  const onDelCartItem = (e) => {
    console.log(e);
    delFromCart(e);
    const key = "updatable";
    message.loading({ content: "Updating Item to Cart...", key });
    setTimeout(() => {
      message.success({ content: "Cart Updated!", key, duration: 2 });
    }, 1000);
  };

  return cart === null ? (
    <div>
      <Empty />
    </div>
  ) : (
    <div style={{ margin: "1rem auto" }}>
      <div style={{ marginLeft: "20px" }}>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        <table className="cartTable">
          <th className="cartTableHead">Item</th>
          <th className="cartTableHead">Price</th>
          <th className="cartTableHead">Size</th>
          <th className="cartTableHead">Units</th>
          <th className="cartTableHead"></th>
          {mainCart && mainCart.map((product) => (
            
            <tr className="cartTableRow">
              <td className="cartTableData" style={{ width: "30%" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/${product.category}/${product.subcategory}/${product.title}/${product._id}`}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ textAlign: "center", width: "fit-content" }}>
                      <img
                        src={product.images[0]}
                        alt=""
                        style={{
                          width: "30%",
                        }}
                      />
                    </div>
                    <div style={{ textAlign: "left" }}>{product.title}</div>
                  </div>
                </Link>
              </td>
              <td className="cartTableData">{product.units * product.price}</td>
              <td className="cartTableData">{product.size}</td>
              <td className="cartTableData">{product.units}</td>
              <td className="cartTableData">
                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={(e) => onDelCartItem(product._id)}
                >
                  <CloseOutlined />
                  Remove
                </Button>
              </td>
              <hr />
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});
export default connect(function(state){
  return{
    cart:state.cart.cartItems
  }
}, { delFromCart })(Cart);
