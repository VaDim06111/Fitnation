import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from '../components/sidenav/sidenav';
import Navbar from '../components/navbar/navbar';
import { authenticationService } from '../services/authenticationService';
import ProfileForm from '../components/profile/profileForm';
import ProfileList from '../components/profile/profileList';
import '../styles/profile/profile.css';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            currentUser: authenticationService.currentUserValue
          }
        this.updateState = this.updateState.bind(this);
        this.updateAuth = this.updateAuth.bind(this);
    }

    updateState = (value) => {
        this.setState({ 
          expanded: value
        })
    }

    updateAuth = (value) => {
        this.setState({
          currentUser: value
        })
    }

    render() {
        return(
            <BrowserRouter>
                <Navbar expanded={this.state.expanded} updateAuth={this.updateAuth}/>
                <Sidenav updateState={this.updateState} updateAuth={this.updateAuth} selected='profile/myProfile'/> 
                <ProfileForm /> 
                <ProfileList /> 
            </BrowserRouter>
        )
    }
}

export default ProfilePage;