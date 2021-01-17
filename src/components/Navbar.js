import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import { logOutUser }  from '../actions/UserActions';
import PropTypes from 'prop-types';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavigationBar = ({logOutUser, userData}) => {
    const history = useHistory();
    const [isDarkMode, setDarkMode] = React.useState(false);

    function userLogout(){
        logOutUser();
        history.push('/log-in');
    }

    const ChangeThemeMode = (checked) =>{
        console.log('on change theme',checked)
        setDarkMode(checked);
        if(checked) {
            document.body.classList.add("dark-mode-on");
        } else {
            document.body.classList.remove("dark-mode-on");
        }
    }

    console.log(userData,'............user in nav')
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Navbar.Brand href="/">My Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <DarkModeSwitch onChange={ChangeThemeMode} checked={isDarkMode}/>
                <Nav>{userData.hasOwnProperty('id') ? (
                    <NavDropdown title={userData.name} id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={userLogout}>My Account</NavDropdown.Item>
                        <NavDropdown.Item onClick={userLogout}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <Nav className="mr-auto">
                        <Nav.Link href="/log-in">Log In</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

NavigationBar.propTypes = {
    logOutUser: PropTypes.func,
    userData: PropTypes.object,
};

const mapStateToProps = state =>{
    return {
        userData:  state.userData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logOutUser: (user) => {
            dispatch(logOutUser(user));
        },
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);