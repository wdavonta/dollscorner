import React from 'react';
// import './style.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const NavBar = () => {


        return (
            <>
              <Nav>
                <NavLink to='/'>
                  {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                  <NavLink to='/about' activeStyle>
                    About
                  </NavLink>
                  <NavLink to='/dollscorner' activeStyle>
                    Dolls Corner
                  </NavLink>
                  <NavLink to='/parenttips' activeStyle>
                    Parent Tips
                  </NavLink>
                  <NavLink to='/contact-us' activeStyle>
                    Contact Us
                  </NavLink>
                  {/* <NavLink to='/sign-up' activeStyle>
                    Sign Up
                  </NavLink> */}
                  {/* Second Nav */}
                  {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
              </Nav>
            </>
          );
        };

export default NavBar;