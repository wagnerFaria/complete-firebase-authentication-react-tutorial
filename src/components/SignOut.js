import React, { Component } from 'react';
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';
import {
    NavItem,
    NavLink
} from 'reactstrap';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';

class SignOut extends Component {

    onClicked = () => {
        auth.doSignOut().then(() => {
            this.props.history.push(routes.LANDING);
        }).catch((error) => {
            console.log(error);
        });

    };
    render() {
        return (
            <Auxiliary>
                <NavItem>
                    <NavLink onClick={this.onClicked}>SignOut</NavLink>
                </NavItem>
            </Auxiliary>
        );
    }
}

export default withRouter(SignOut);