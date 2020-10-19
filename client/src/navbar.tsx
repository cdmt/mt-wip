import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    ul{
        list-style: none;
        margin: 0;
        padding-inline-start: 10px;
        margin: 10px 0;
    }
`

const Navbar = () => {

    return(
        <Nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </Nav>
    )
}

export default Navbar