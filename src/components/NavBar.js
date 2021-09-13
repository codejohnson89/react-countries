import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from '../redux/colorMode';

const NavBar = () => {

    const color = useSelector((state) => state.color.value);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text onClick={() => dispatch(darkMode())}>
                        {
                           color ? 'light mode' : 'dark mode'
                        }
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;