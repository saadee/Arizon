import React, { useEffect, useState } from 'react'
import './DetailProduct.css'
import { getProduct } from '../../../_actions/product_action'
import { addToCart } from '../../../_actions/product_action'
import { connect } from 'react-redux'
import menChart from './Sections/sizecharts/men.webp'
import womenChart from './Sections/sizecharts/women.webp'
import boyChart from './Sections/sizecharts/boy.webp'
import { HeartOutlined } from '@ant-design/icons'
import { Col, Card, Spin, Tabs, Radio, Divider, Button, Modal, message, Row, Icon } from "antd";

const { TabPane } = Tabs;
// const { HeartOutlined } = Icon


function DetailProductPage({ getProduct, addToCart, product: { product, loading }, match }) {
    useEffect(() => {
        getProduct(match.params.id)
    }, [getProduct])
    const [Quantity, setQuantity] = useState(1)
    const add = (e) => {
        setQuantity(Quantity + 1)
    }
    const sub = (e) => {
        setQuantity(Quantity - 1)
    }
    if (Quantity >= 10) {
     const    key = 'warning'
        message.warning({ content: 'You Cannot Add More Items...', key });
        setQuantity(9)
    }
    const Url = "http://localhost:5000"
    let mode = "left";
    if (window.innerWidth <= 700) {
        mode = "bottom";
    } else {
        mode = "left";
    }
    const [state, setState] = useState({ visible: false })


    const showModal = () => {
        setState({
            visible: true,
        });
    };

    const handleOk = e => {
        console.log(e);
        setState({
            visible: false,
        });
    };

    const handleCancel = e => {
        console.log(e);
        setState({
            visible: false,
        });
    };
    const addTocartItem = (e) => {
        addToCart(product._id)
        const key = 'updatable';
        message.loading({ content: 'Adding Item to Cart...', key });
        setTimeout(() => {
            message.success({ content: 'Added!', key, duration: 2 });
        }, 1000);
    }
    return !product ? (
        <div
            style={{
                justifyContent: "center",
                display: "flex",
                height: "300px",
                margin: '5rem auto',
                alignItems: "center",
            }}>
            <Spin
                size="large"
            ></Spin>
        </div>
    ) : (<div className="productDetailWrapperDiv" style={{ margin: '3rem auto', textAlign: 'center' }}>

        <div className='imageDiv'
            style={{
                display: '', flex: 'wrap', margin: '-1rem auto', border: '1px '
                , paddingRight: '2rem', paddingLeft: '2rem'
            }} >

            <Tabs className='productImages'
                defaultActiveKey="1"
                tabPosition={mode}
                className="carousal"

            >

                <TabPane
                    tab={
                        <img
                            src={product.images ? `http://localhost:5000/${product.images[0]}` : ''}
                            alt="asdasd"
                            width="50"
                        />
                    }
                    key={1}
                >
                    <div>
                        <Card className='productImageDiv' style={{ width: '80%', margin: '1rem auto', height: '70%' }}
                            hoverable={true}
                            loading={product.images ? false : true}
                            cover={
                                <img
                                    src={product.images ? `http://localhost:5000/${product.images[0]}` : ''}
                                    alt="product image"

                                />
                            }
                        >
                        </Card>



                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <img
                            src={product.images ? `http://localhost:5000/${product.images[1]}` : ''}

                            alt="asdasd"
                            width="50"
                        />
                    }
                    key={2}
                >
                    <div

                    >
                        <Card className='productImageDiv' style={{ width: '80%', margin: '1rem auto', height: '70%' }}
                            hoverable={true}
                            loading={product.images ? false : true}
                            cover={
                                <img
                                    src={product.images ? `http://localhost:5000/${product.images[1]}` : ''}
                                    alt="product image"

                                />
                            }
                        >
                        </Card>
                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <img
                            src={product.images ? `http://localhost:5000/${product.images[2]}` : ''}

                            alt="asdasd"
                            width="50"
                        />
                    }
                    key={3}
                >
                    <div

                    >
                        <Card className='productImageDiv' style={{ width: '80%', margin: '0.2rem auto' }} xs={24} lg={12} md={16} sm={24}
                            hoverable={true}
                            loading={product.images ? false : true}
                            cover={
                                <img
                                    src={product.images ? `http://localhost:5000/${product.images[2]}` : ''}
                                    alt="product image"
                                    style={{ height: '100%' }}

                                />
                            }
                        >
                        </Card>
                    </div>
                </TabPane>
            </Tabs>

            <div style={{ display: 'flex', textAlign: 'left', width: '600px', marginTop: '1rem' }}>
                <div className="item_pricing_details">
                    <h1 className="item_Name">{product.title}</h1>
                    <p className="item_Description">{product.description}</p>
                    <del className="item_salePrice">
                        Rs &nbsp;
                      {product.saleprice}
                      &nbsp; only

                    </del>
                    <span></span>
                    <span></span>
                    <span className="item_Price">
                        Rs:&nbsp;
                      {product.price}
                      &nbsp; only
                    </span>
                    <Divider />
                    <div>
                        <h5>Select Your Size</h5>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button
                                value="1"
                                style={{ marginRight: "5px", marginTop: "5px" }}
                            >
                                S
                        </Radio.Button>
                            <Radio.Button
                                value="2"
                                style={{ marginRight: "5px", marginTop: "5px" }}
                            >
                                M
                        </Radio.Button>

                            <Radio.Button
                                value="3"
                                style={{ marginRight: "5px", marginTop: "5px" }}
                            >
                                L
                        </Radio.Button>
                            <Radio.Button
                                value="4"
                                style={{ marginRight: "5px", marginTop: "5px" }}
                            >
                                XL
                        </Radio.Button>
                        </Radio.Group>
                        <h5 style={{ marginTop: "10px", padding: '1rem' }}>Quantity</h5>

                        <div className="items" style={{ margin: "10px" }}>
                            <Button
                                // disabled={this.state.qnty < 2}
                                className="btn-1"
                                onClick={(e) => sub(e)}
                            >
                                -
                        </Button>
                            {/* <Button className="btn-2">{this.state.count}</Button> */}
                            <span
                                style={{
                                    width: "30px",
                                    padding: "0px",
                                    textAlign: "center",
                                    border: "0",
                                    fontSize: '20px',
                                    fontWeight: '600'
                                }}
                                size="default"
                            >
                                &nbsp; {Quantity} &nbsp;
                            </span>
                            <Button
                                className="btn-3"
                                onClick={(e) => add(e)}
                            >
                                +
                        </Button>
                        </div>
                        <div className='sizeChart'>
                            <Button onClick={showModal}>
                                <span style={{ fontWeight: 'bold' }}>Size Chart</span>
                            </Button>
                            <Row gutter={[16, 16]}>
                                <Col xs={6}>
                                    <Modal className='sizeChartModal'
                                        title={product.category + " Size Chart"}
                                        visible={state.visible}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        okType={null}
                                        footer={null}
                                        zIndex={1000}
                                        width={window.innerWidth > 700 ? 800 : 1000}
                                        centered={true}
                                    >
                                        <div className='sizeChartImageDiv'>
                                            <img className='sizeChartImage' src={product.category == "Mens" ? menChart : womenChart ||
                                                product.category == 'women' ? womenChart : '' &&
                                                    product.category == 'kids' ? boyChart : ''}
                                                alt="" /></div>
                                    </Modal>
                                </Col>
                            </Row>
                        </div>

                        <button className='addCart-btn'

                            onClick={e => addTocartItem(e)}
                        >
                            Add To Cart
                      </button>
                        <button className='addWishList-btn'

                        // onClick={e => addTocartItem(e)}
                        >
                            <HeartOutlined />  <span></span>  Add To Wish List
                        </button>
                        <Divider />
                    </div>
                </div>
            </div>
        </div>
        <Divider />




    </div >)
}
const mapStateToProps = (state) => ({
    product: state.product,
});
export default connect(mapStateToProps, { getProduct, addToCart })(DetailProductPage);

