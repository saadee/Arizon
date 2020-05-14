import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../../_actions/product_action";
import { Icon, Row, Col, Card, Spin } from "antd";
import RadioBox from "../RadioBox/RadioBox";
import SearchBox from "../Search/Search";
import price from '../RadioBox/PriceData'

const { Meta } = Card;

const LandingPage = ({ product: { products, loading, Skip, Limit, postSize }, getProducts }) => {
  // const [Skip, setSkip] = useState(0);
  // const [Limit, setLimit] = useState(8);
  const [Products, setProducts] = useState([]);
  const [SearchItems, setSearchItems] = useState('')
  const [Filters, setFilters] = useState({
    price: [],
  });

  let variable = {
    skip: Skip,
    limit: Limit

  };
  useEffect(() => {
    getProducts(variable);
  }, [getProducts]);

  const onLoad = (e) => {

    let variable = {
      skip: Skip,
      limit: Limit
    }
    getProducts(variable);
  };

  const showFilterResults = (filters) => {
    let variable = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variable);
    // setSkip(0);
  };
  const handlePrice = (value) => {
    const data = price
    let array = []
    for (let key in data) {
      // console.log('key', key)
      // console.log('value', value)

      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].name
        console.log("arr", array)

      }
    }
    return array
  }
  const handleFilters = (filters, category) => {
    console.log(filters);

    const newFilters = { ...Filters };
    newFilters[category] = Filters;
    if (category === "price") {
      let priceValues = handlePrice(filters)
    }
    showFilterResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchItems = (newSearchItems) => {
    setSearchItems(newSearchItems)
  }
  return (
    <div style={{ margin: "3rem auto", width: "90%" }}>
      {products.length === 0 ? <div
        style={{
          justifyContent: "center",
          display: "flex",
          height: "300px",
          alignItems: "center",
        }}
      >
        <Spin
          size="large"
          style={{ fontSize: "100px", margin: "auto" }}
        ></Spin>
      </div> :
        <div>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <RadioBox list={price}
                handleFilters={(filters) => handleFilters(filters, "price")}
              />
            </Col>
          </Row>

          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem ' }}>
            <SearchBox refreshFunction={updateSearchItems} />

          </div>
          <div>
            <Row gutter={[16, 16]}>{products.map((product, index) => (
              <Col lg={6} md={8} sm={12} xs={12}>
                <Card
                  hoverable={true}
                  loading={product.images ? false : true}
                  cover={
                    <img
                      src={`http://localhost:5000/${product.images}`}
                      alt="product image"
                      style={{ width: "100%", maxHeight: "400px", height: "400px" }}
                    />
                  }
                  bordered={true}
                >
                  <Meta title={product.title} description={"$" + product.price}></Meta>
                </Card>
              </Col>
            ))}</Row>
          </div>

          <br />
          <br />
          {products.length <= 48 ?
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={(e) => onLoad(e)}>Load more...</button>
            </div> : <div style={{ display: "flex", justifyContent: "center" }}>No more Products...</div>
          }</div>

      }
    </div>
  );
};

LandingPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  user: state.user,
});
export default connect(mapStateToProps, { getProducts })(LandingPage);
