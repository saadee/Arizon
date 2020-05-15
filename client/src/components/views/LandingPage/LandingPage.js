import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../../_actions/product_action";
import { Icon, Row, Col, Card, Spin } from "antd";
import RadioBox from "../RadioBox/RadioBox";
import SearchBox from "../Search/Search";
import Price from '../RadioBox/PriceData'

import { Link } from 'react-router-dom'

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


  useEffect(() => {
    setProducts(products);
  }, [products]);


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
  // console.log(Price)

  const handlePrice = (value) => {
    const data = Price

    let array = []
    for (let key in data) {
      alert("j")
      console.log('key', key)
      // console.log('value', value)

      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array


      }
    }
    console.log("arr", array)
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
    // this.setState({
    //   searchword: e.target.value,
    // });
    // setSearchItems(newSearchItems)
    // const products = products;
    console.log("products", products)
    const filtereditem = products.filter((p) =>
      p.title.toLowerCase().includes(newSearchItems.toLowerCase())
    );
    console.log("item", filtereditem);
    // this.setState({
    //   todos: filtereditem,
    // });
    // getProducts(filtereditem)
    setProducts(filtereditem)

    let variable = {
      skip: 0,
      limit: Limit,
      search: newSearchItems
    };

    getProducts(variable);
  }
  return (
    <div style={{ margin: "1rem auto", width: "90%" }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem ' }}>
        <SearchBox refreshFunction={updateSearchItems} />

      </div>
      {Products.length === 0 ? <div
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
          {/* <Row gutter={[16, 16]}>
            <Col xs={24}>
              <RadioBox list={Price}
                handleFilters={(filters) => handleFilters(filters, "price")}
              />
            </Col>
          </Row> */}


          <div>
            <Row gutter={[16, 16]}>{Products.map((product, index) => (
              <Col lg={6} md={8} sm={12} xs={12}>
                <Link to={`/${product.category}/${product.subcategory}/${product.title}/${product._id}`}>
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
                </Link>
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
