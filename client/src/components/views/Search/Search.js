import React, { useState } from "react";
import { Input } from "antd";
import { set } from "mongoose";

const { Search } = Input;
function SearchBox(props) {
  const [SearchItem, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.currentTarget.value);
    props.refreshFunction(e.currentTarget.value);
    // console.log(e.currentTarget.value)
  };
  return (
    <div>
      <Search
        value={SearchItem}
        placeholder="Search by Typing..."
        onChange={(e) => onChangeSearch(e)}
      ></Search>
    </div>
  );
}

export default SearchBox;
