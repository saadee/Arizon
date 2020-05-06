import React, { useEffect, Fragment } from "react";
import { FaCode } from "react-icons/fa";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getProducts } from '../../../_actions/product_action'
import { Icon, Row, Col, Card, Spin } from 'antd'
const { Meta } = Card

const LandingPage = ({ product: { products, loading }, getProducts }) => {
    useEffect(() => {
        getProducts()
    }, [getProducts])

    const renderCards = products.map((product, index) => (
        <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<img src={`http://localhost:5000/${product.images[0]}`} alt='product image' style={{ width: '100%', maxHeight: '150px' }} />}
                bordered={true}
            >
                <Meta
                    title={product.title}
                    description={'$' + product.price}
                >
                </Meta>

            </Card>

        </Col>
    ))
    const onLoad = () => {

    }
    return <div stryle={{ margin: '3rem auto', width: "75%" }}>
        <div style={{ textAlign: "center" }}>
            <h2>Let's Go Arizone.. <Icon type='rocket' /></h2>
        </div>
        {/* {filter} */}
        {/* {Search} */}

        {products.length === 0 ?
            <div style={{ justifyContent: 'center', display: 'flex', height: '300px', alignItems: 'center' }}>
                <h2>No Products yet...</h2>
                <Spin size="large"></Spin>
            </div> :
            <div>
                <Row gutter={[16, 16]}>
                    {renderCards}

                </Row>
            </div>
        }
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={onLoad}>Load more...</button>
        </div>

    </div>
};

LandingPage.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    product: state.product,
    user: state.user

});
export default connect(mapStateToProps, { getProducts })(LandingPage);
