import React, { useEffect } from 'react'
import { getProduct } from '../../../_actions/product_action'
import { connect } from 'react-redux'
import { Icon, Row, Col, Card, Spin } from "antd";
import ProductImages from './Sections/ProductImages'


function DetailProductPage({ getProduct, product: { product, loading }, match }) {
    useEffect(() => {
        getProduct(match.params.id)
    }, [getProduct])
    return loading == null ? (
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
    ) : (<div style={{ margin: '2rem auto', textAlign: 'center' }}>
        <Row gutter={[16, 16]}>
            <Col lg={10} md={18} sm={16} xs={12}>
                <ProductImages details={product} style={{ border: '1px solid red' }} />
            </Col>
        </Row>

    </div>)
}
const mapStateToProps = (state) => ({
    product: state.product,
});
export default connect(mapStateToProps, { getProduct })(DetailProductPage);

