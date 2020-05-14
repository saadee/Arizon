import React, { useState } from "react";
import { Typography, Button, Input, Form } from "antd";
import FileUpload from "../../utils/FileUpload";
import { connect } from "react-redux";
import { UploadProduct } from "../../../_actions/product_action";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UploadProductPage({ UploadProduct }) {
    const { Title } = Typography;
    const { TextArea } = Input;

    const Categorys = [
        { key: 0, value: "None" },
        { key: 1, value: "Mens" },
        { key: 2, value: "Women" },
        { key: 3, value: "Kids" },
        { key: 4, value: "HouseHolds" },
    ];
    const subCategorys = [
        { key: 0, value: "None" },
        { key: 1, value: "T-Shirts" },
        { key: 2, value: "Shoes" },
        { key: 3, value: "Denim" },
        { key: 4, value: "Shirts" },
    ];

    const [TitleValue, setTitle] = useState(" ");
    const [Description, setDescription] = useState(" ");
    const [Price, setPrice] = useState(0);
    const [Category, setCategory] = useState("");
    const [Images, setImages] = useState([]);
    const [subCategory, setsubCategory] = useState("");

    const OnTitleChange = (e) => {
        setTitle(e.currentTarget.value);
    };
    const OnDescriptionChange = (e) => {
        setDescription(e.currentTarget.value);
    };
    const OnPriceChange = (e) => {
        setPrice(e.currentTarget.value);
    };
    const OnCategoryChange = (e) => {
        setCategory(e.currentTarget.value);
    };
    const OnSubCategoryChange = (e) => {
        setsubCategory(e.currentTarget.value);
    };
    const updatemages = (newImages) => {
        setImages(newImages);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const variables = {
            title: TitleValue,
            description: Description,
            price: Price,
            category: Category,
            subcategory: subCategory,
            images: Images,
        };
        console.log("formDAta", variables);
        if (!TitleValue || !Description || !Price || !Category || !Images) {
            return toast.error("Please Enter all the fields", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        UploadProduct(variables);
    };
    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
            <div style={{ textAlign: "center", maginBottom: "2rem" }}>
                <Title>Upload your Product here!</Title>
            </div>

            <Form onSubmit={onSubmit}>
                {}
                <FileUpload refeshFunction={updatemages} />
                <br />
                <br />
                <label>Title</label>
                <Input
                    type="text"
                    name="title"
                    id=""
                    onChange={OnTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    name="description"
                    id=""
                    cols="30"
                    rows="5"
                    onChange={OnDescriptionChange}
                    value={Description}
                ></TextArea>
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    type="number"
                    name="price"
                    onChange={OnPriceChange}
                    value={Price}
                />
                <br />
                <br />
                <label htmlFor="">Select Category </label>
                <select onChange={OnCategoryChange} name="category">
                    {Categorys.map((item) => (
                        <option key={item.key} value={item.value}>
                            {item.value}
                        </option>
                    ))}
                </select>{" "}
                <label htmlFor="">Select Sub-Category </label>
                <select onChange={OnSubCategoryChange} name="category">
                    {subCategorys.map((item) => (
                        <option key={item.key} value={item.value}>
                            {item.value}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <Button onClick={onSubmit}>Submit</Button>
                <ToastContainer autoClose={2000} />
            </Form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user,
});
export default connect(mapStateToProps, { UploadProduct })(UploadProductPage);
