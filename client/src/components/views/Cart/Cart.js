import React from 'react'
import './cart.css'
import { Table, Empty } from 'antd'
import { connect } from 'react-redux'


function Cart(props) {
    const images = props.cart.images
    const columns = [
        {
            title: 'Image',
            dataIndex: `http://localhost:5000/${props.cart.images ? props.cart.images : ''}`,
            key: 'image',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'Category',
        },
    ];

    return props.cart == null ?
        <div><Empty />
        </div> :
        (
            <div style={{ margin: '1rem auto' }}>
                <div style={{ marginLeft: '20px' }}>
                    <h1>Shopping Cart</h1>
                </div>
                <hr />
                <div style={{ margin: '3rem auto', textAlign: 'center', border: '1px solid red' }}>
                    {props.cart.map((product) => (
                        <div style={{display:'flex'}}>
                            <div style={{ width: '30%', height: '20%' }}>
                                <img src={product.images[0]} alt="" style={{
                                    width: '30%',
                                }} />
                            </div>
                            <div>{product.title}</div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    ))}
                </div>
            </div>
        )
}
const mapStateToProps = (state) => ({
    cart: state.cart.cartItems,
});
export default connect(mapStateToProps)(Cart)
