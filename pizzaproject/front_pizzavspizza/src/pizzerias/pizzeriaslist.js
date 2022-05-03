import React, { Component } from 'react';
import PizzaDetail from './pizzeriadetail';
import axios from 'axios';
class PizzaList extends React.Component {

    state = {
        pizzeriaData: [],
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8080/')
        .then((response) => {
            this.setState({pizzeriasData: response.data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
            {this.state.pizzeriasData.map( item => {
                return <h3 key={item.id}>{item.pizzeria_name}, {item.city}</h3>
            })}
            </div>
        )
    }
}  
export default PizzaList;