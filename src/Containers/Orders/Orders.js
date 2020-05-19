import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axiosOrders';

class Orders extends Component {
    state = {
        orders: [],
        isLoading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
        .then((res) => {
            // console.log(res);
            const fetchedOrders =[];
            for(let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({
                isLoading: false,
                orders: fetchedOrders
            })
        })
        .catch((err) => {
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.orders.map((order) => (
                    <Order 
                    key = {order.id}
                    ingredients = {order.ingredients}
                    price = {order.price}></Order>
                ))}
            </div>
        )
    }
}

export default Orders;