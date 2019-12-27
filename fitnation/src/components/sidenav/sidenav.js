import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './clickOutside';
import { MDBIcon } from 'mdbreact';

class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

    }
    render() {
        return(
           <ClickOutside
                onClickOutside={() => {
                    this.setState({ expanded: false });
                    this.props.updateState(false);
                }}
            >
            <SideNav style={{backgroundColor:"#00695c", height: "100vh", position: 'fixed'}}
                expanded={this.state.expanded}
                onToggle={(expanded) => {
                    this.setState({ expanded });
                    if(expanded) {
                        this.props.updateState(true);
                    } else {
                        this.props.updateState(false);
                    }
                    
                }}
            >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <MDBIcon icon="home" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="reservation">
                    <NavIcon>
                    <MDBIcon far icon="calendar-alt" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Reservation
                    </NavText>
                    <NavItem eventKey="reservation/gym">
                        <NavText>
                            Gym
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="reservation/tennis">
                        <NavText>
                            Tennis table
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="reservation/bowling">
                        <NavText>
                            Bowling
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="reservation/billiards">
                        <NavText>
                            Billiards
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="price-list">
                    <NavIcon>
                        <MDBIcon icon="hand-holding-usd" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Price
                    </NavText>
                    <NavItem eventKey="price-list/gym">
                        <NavText>
                            Gym
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="price-list/tennis">
                        <NavText>
                            Tennis table
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="price-list/bowling">
                        <NavText>
                            Bowling
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="price-list/billiards">
                        <NavText>
                            Billiards
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="gallery">
                    <NavIcon>
                    <MDBIcon far icon="image" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Gallery
                    </NavText>
                </NavItem>
                <NavItem eventKey="contact">
                    <NavIcon>
                    <MDBIcon icon="phone-alt" style={{ fontSize: '1.75em' }}/>
                    </NavIcon>
                    <NavText>
                        Contact
                    </NavText>
                </NavItem>
            </SideNav.Nav>
            </SideNav>
            </ClickOutside>
        )
    }
}

export default Sidenav;