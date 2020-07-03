import React, { Component } from 'react';
import './Tours.css'
import Card from 'react-bootstrap/Card'


class Tours extends Component {

    constructor() {
        super();
        this.state = {
            isOpen1: false
        }
    }
    render() {

        const {id, city, img, name, info } = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour container mt-5">

                <div className="col-md-3 mb-3 float-left">

                    <Card style={{ width: '100%' }} className="border-0">
                        <div className="img-container">

                            <Card.Img variant="top" src={img} className="img-design"/>
                            <span onClick={()=>{removeTour(id)}} className="close-btn">
                                <i className="fas fa-window-close"></i>
                            </span>

                        </div>

                        <Card.Body className="cardbodycolor">

                            <h4 className="text-success">{city}</h4>
                            <h6>{name}</h6>

                            <div>
                                <span>Info{" "}
                                    <i style={{ cursor: "pointer" }} onClick={() => this.setState({ isOpen1: !this.state.isOpen1 })} className="fas fa-caret-square-down ml-1 text-info"></i>
                                </span>
                            </div>

                            {this.state.isOpen1 && <h6 className="text-muted font-italic mt-1">{info}</h6>}

                        </Card.Body>

                    </Card>
                </div>

            </article>
        );
    }
}

export default Tours;