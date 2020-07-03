import React, { Component } from 'react';
import Tours from '../Tours/Tours';
import {tourData} from '../tourData';

class Tour extends Component {

    state ={
        tours: tourData
    }

    removeItem =(id)=>{
        
        const {tours} = this.state;
        const newItems = tours.filter(Items =>(Items.id !== id));
        this.setState({
            tours: newItems
        })
    }

    render() {

        const {tours} =this.state;
        console.log(tours);

        return (
            <div>
                {tours.map(tourmethod =>(
                    <Tours key={tourmethod.id} tour={tourmethod} removeTour={this.removeItem}/>
                ))}
                
            </div>
        );
    }
}

export default Tour;