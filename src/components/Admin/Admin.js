import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState([null]);

    const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    };
    const url = `https://cherry-pie-85193.herokuapp.com/addProduct`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '56cf5f0792ac49fcbf6e45e2e3021209');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
    return (
        <div>
            <h1>Add Products for Agro Vast</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="product name" ref={register({ required: true })} />  
            <input name="price" defaultValue="1" ref={register({ required: true })} />  
            <input name="imageURL" type="file" onchange={handleImageUpload} />      
            <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;