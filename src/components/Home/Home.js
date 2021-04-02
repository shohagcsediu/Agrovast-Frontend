import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = ('https://cherry-pie-85193.herokuapp.com/order');
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    return (
        <div>
            <Container fluid> 
                <Row>
                {orders.length === 0 && <h3>loading product...</h3>}
                    {
                       orders && orders.map(product => <Product product={product}  key={product.id} ></Product>)
                    }
          
                 </Row>
            </Container>
        </div>
    );
};

export default Home;