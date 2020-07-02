import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMensShoes } from "../../../../_actions/product_action";
import { Icon, Row, Col, Card, Spin } from "antd";
import RadioBox from "../../RadioBox/RadioBox";
import SearchBox from "../../Search/Search";
import { ShoppingOutlined } from "@ant-design/icons";
import Price from '../../RadioBox/PriceData'

import { Link } from 'react-router-dom'

const { Meta } = Card;

const MensShoesPage = ({ product: { MensShoes, loading, Skip, Limit, postSize }, getMensShoes }) => {
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
    getMensShoes(variable);
  }, [getMensShoes]);


  useEffect(() => {
    setProducts(MensShoes);
  }, [MensShoes]);


  const onLoad = (e) => {

    let variable = {
      skip: Skip,
      limit: Limit
    }
    getMensShoes(variable);
  };

  const showFilterResults = (filters) => {
    let variable = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getMensShoes(variable);
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
    const filtereditem = MensShoes.filter((p) =>
      p.title.toLowerCase().includes(newSearchItems.toLowerCase())
    );
    // console.log("item", filtereditem);
    // this.setState({
    //   todos: filtereditem,
    // });
    // getMensShoes(filtereditem)
    setProducts(filtereditem)
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
        > <span style={{ fontSize: '30px', fontWeight: 'bolder', color: 'black' }}>No Products Found</span> </Spin>
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
                <Card
                  hoverable={true}
                  loading={product.images ? false : true}
                  cover={
                    <Link to={`/${product.category}/${product.subcategory}/${product.title}/${product._id}`}>

                      <img
                        src={`http://localhost:5000/${product.images[0]}`}
                        alt="product image"
                        style={{ width: "100%", maxHeight: "400px", height: "400px" }}
                      />
                    </Link>
                  }
                  bordered={true}
                >
                  <Meta title={product.title} description={
                    <div style={{ display: 'flex' }}>
                      <span style={{ fontSize: '15px', fontWeight: 'bold', color: 'black' }}>{'PKR ' + product.price}</span>
                      <div> 
                        <ShoppingOutlined style={{
                          marginLeft: '9rem',
                          fontSize: '25px',
                        }} />
                      </div>
                    </div>
                  }></Meta>

                </Card>
              </Col>
            ))}</Row>
          </div>

          <br />
          <br />
          {/* {MensShoes.length <= 48 ?
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={(e) => onLoad(e)}>Load more...</button>
            </div> : <div style={{ display: "flex", justifyContent: "center" }}>No more Products...</div>
          } */}
          </div>

      }
    </div>
  );
};

MensShoesPage.propTypes = {
  getMensShoes: PropTypes.func.isRequired,
  MensShoes: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  user: state.user,
});
export default connect(mapStateToProps, { getMensShoes })(MensShoesPage);
