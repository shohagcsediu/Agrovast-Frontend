import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name,price,imageURL} = props.product;
    return (
        <div>
            <Col sm={4}>
                <Card border="primary" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={imageURL} alt={name} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text> Price: $ {price} </Card.Text>
                <Card.Text><Link to={`/order/${name}`}><Button variant="primary">Buy Now</Button></Link></Card.Text>
                </Card.Body>
                </Card>
                
            </Col>
        </div>
    );
};

export default Product;