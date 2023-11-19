import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = ({cartCount}) => {
    return (
        <>
            <Navbar style={{ height: "60px", background: "#1fd18b", color: "white" }}>
                <Container>
                <NavLink to="/" className=" d-flex text-decoration-none text-light mx-2">
                    <h3 className='text-light mx-4'>MarketStore</h3>
                </NavLink>
                <NavLink to="/inspired" className=" d-flex text-decoration-none text-light mx-2">
                    <h3 className='text-light'>About Us</h3>
                    <h3 className='text-light mx-4'>FAQ</h3>
                </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        {cartCount > 0 && (
                        <span className='p1 fa-stack fa-2x has-badge'>
                            <span className="badge badge-danger badge-counter">{cartCount}</span>
                        </span>
                        )}
                    </div>
                    </NavLink>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar