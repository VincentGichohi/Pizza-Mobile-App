import React, { Component } from 'react';
import PizzaDetail from './pizzeriadetail';
import DummyData from "./dummydata.json";

class PizzaList extends React.Component {
    render() {
        return (
            <div>
                {DummyData.map(item => {
                    return < PizzaDetail p = {item} />
                })
                }
            </div>
        )
    }
}  
export default PizzaList;