import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://cherry-pie-85193.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h1>Order Page</h1>
            <h2>Order: {orders.length}</h2>
            {
                orders.map(product => <li>{product.name}</li>)
            }
        </div>
    );
};

export default Order;