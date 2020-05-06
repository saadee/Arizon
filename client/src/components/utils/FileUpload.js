import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Icon, Typography } from 'antd'
import Axios from 'axios'
import { DeleteFilled } from '@ant-design/icons';
import './fileupload.css'
function FileUpload(props) {
    const [Images, setImages] = useState([])
    const onDrop = (files) => {
        let formData = new FormData();
        let config = {
            headers: { "content-Type": 'multipart/form-data' }
        }
        formData.append('file', files[0])
        try {
            Axios.post('/api/product/uploadImage', formData, config)
                .then(res => {
                    if (res.data.success) {
                        setImages([...Images, res.data.image])
                        props.refeshFunction([...Images, res.data.image])

                    } else {
                        alert('Failed to save the image')
                    }
                })

        } catch (error) {

        }


    }
    const onDelete = (image) => {
        let index = Images.indexOf(image)
        let newImages = [...Images];
        newImages.splice(index, 1)
        setImages(newImages)
        props.refeshFunction(newImages)

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{
                            width: '300px', height: '250px', border: '1px solid  lightgray',
                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }} {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon type='plus' style={{ fontSize: '3rem' }} />
                    </div>
                )}
            </Dropzone>
            <div style={{ display: 'flex', width: '600px', height: '250px', overflowX: 'scroll', border: '1px solid lightgray' }}>
                {Images.map((image, index) => (
                    <div style={{ border: '1px solid grey', width: 'fit-content' }} onClick={() => onDelete(image)}>

                        <div>
                            <DeleteFilled id='delicon' style={{
                                fontSize: '3rem', position: 'relative',
                                left: '50%'
                            }} />
                            <img id='uploadImage' style={{ width: '300px', height: '240px ', margin: '2px' }}
                                src={`http://localhost:5000/${image}`} alt={`product-image${index}`} />
                        </div>

                    </div>

                ))}

            </div>
        </div>
    );
}

export default FileUpload;
