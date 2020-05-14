import React, { useState } from "react";
import { Collapse, Row, Radio, Col } from "antd";



const { Panel } = Collapse;


function RadioBox(props) {
  const [Value, setValue] = useState('0')
  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  };
  return (
    <div style={{ margin: '1rem auto' }}>
      <Collapse lg={6} defaultActiveKey={["0"]}>
        <Panel header="Price Range" key="1">
          <Radio.Group onChange={e => handleChange(e)} value={Value}>
            {props.list.map((value) => (
              <Radio key={value._id} value={`${value._id}`}>
                <span style={{ fontWeight: 'bold' }}> {value.name}</span>
              </Radio>
            ))}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
}

export default RadioBox;
