import React from 'react'
import { Link } from 'react-router-dom';
import '../styles.scss';


  
const Nav: React.FC = () => {
    return (
        <div className="nav">
            <Link to="/">HOME</Link>
            <Link to="/tour">TOUR</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
        </div>
    );
};


export default Nav;