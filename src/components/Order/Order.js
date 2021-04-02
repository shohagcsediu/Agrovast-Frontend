import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const {name} = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://cherry-pie-85193.herokuapp.com/order/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data.orders));
       
    }, [name])
    return (
        <div>
            <h1>Checkout</h1>
            <h3>You Ordered for : {name}</h3>
            
        </div>
    );
};

export default Order;