import React, { Component } from 'react';
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';

class SignOut extends Component {

    onClicked = () => {
        auth.doSignOut().then(()=>{
            this.props.history.push(routes.LANDING);
        }).catch((error) => {
            console.log(error);
        });
        
    };
    render() {
        return (
            <div>
                <button
                        type="button"
                        onClick={this.onClicked}>
                        Sign Out
                </button>
            </div>
        );
    }
}

export default withRouter(SignOut);