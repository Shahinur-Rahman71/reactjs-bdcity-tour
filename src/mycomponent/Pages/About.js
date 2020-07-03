import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container mt-5">
            <Link to="/tour">
                <Button variant="outline-info">Learn More 
                    <i className="fas fa-angle-double-right ml-1"></i>
                </Button>
            </Link>  
        </div>
    );
};

export default About;