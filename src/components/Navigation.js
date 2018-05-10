import React from 'react';
import SignOutNav from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import { auth } from '../firebase';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onSignOutClicked = () => {
        auth.doSignOut().then(() => {
            this.props.history.push(routes.LANDING);
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">FIREBASE AUTH</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <AuthUserContext.Consumer>
                                {authUser => authUser
                                    ? <NavigationAuth />
                                    : <NavigationNonAuth />
                                }
                            </AuthUserContext.Consumer>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
const NavigationAuth = () => (
    <Auxiliary>
        <NavItem>
            <NavLink href={routes.LANDING}>Landing</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={routes.HOME}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={routes.ACCOUNT}>Account</NavLink>
        </NavItem>
        <SignOutNav />
    </Auxiliary>
);

const NavigationNonAuth = () => (
    <Auxiliary>
        <NavItem>
            <NavLink href={routes.LANDING}>Landing</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href={routes.SIGN_IN}>Sign In</NavLink>
        </NavItem>
    </Auxiliary>
);