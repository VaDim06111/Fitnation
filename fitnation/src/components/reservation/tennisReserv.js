import React from 'react';
import '../../styles/reservation/tennisReservation.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TimeSelect from './timeSelect';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
import { MDBBtn, MDBAlert } from 'mdbreact';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';


class TennisReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            error: false,
            selectedObjects: [],
            currentUser: authenticationService.currentUserValue
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.updateObjects = this.updateObjects.bind(this);
    }

    onSubmit = () => {
        try{
            let userEmail = this.state.currentUser.email;
            let typeObject = 'Tennis';
            let tables = document.getElementsByClassName('mesta');
            let selectedTables = [];
    
            for(let j = 0; j < tables.length; j++) {
                if(tables[j].style.background === 'red') {
                    selectedTables.push(tables[j].id);
                }   
            }
    
            let timeElement = document.getElementsByClassName('col-sm-5 col-md-4 time-select')[0];
            let timeRange = timeElement.innerText;

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                Authorization: `Bearer ${this.state.currentUser.token}` },
                body: JSON.stringify({"Email": userEmail, "TimeRange": timeRange, "Type": typeObject, 
                    "ObjectNames": selectedTables, "DateReservation": this.state.selectedDate})
            };

            fetch(`https://localhost:44348/api/reservation`, requestOptions)
                .then(handleResponse)
                .then(
                    (result) => {
                        window.location='/';
                    }     
                )
        }
        catch(ex) {
            this.setState({
                error: true
            })
        }    
    }

    updateObjects = () => {
        let objects = document.getElementsByClassName('mesta');
        let selected = [];
        for(let k = 0; k < objects.length; k++) {
            if(objects[k].style.background === 'red') {
                selected.push(objects[k].id);
            }   
        }
        this.setState({ selectedObjects: selected })
    }

    render() {
        const { selectedDate, error, selectedObjects } = this.state;
        var l = document.getElementsByClassName('mesta'); 

        function Count_Mest (){
            let z_mest = 0;
                for(let i = 0; i < l.length; i++){
                    if(l[i].style.background === 'red'){
                        z_mest++;
                    }
                }  
            return z_mest;
        }

        for(let i = 0; i < l.length; i++) {
            l[i].onclick = function(){
                if(this.style.background === 'red') {
                    this.style.background='silver';
                    document.getElementById('count_').innerHTML = 'Selected tables : '+ Count_Mest ();                                  
                } else {
                    this.style.background='red';
                    document.getElementById('count_').innerHTML = 'Selected tables : '+ Count_Mest ();             
                } 
            }
        }

        const handleDateChange = date => {
            this.setState({
                selectedDate: date
            })
        };

        const tables = [
            {
            id: 1,
            name: 'Table 1'
            },
            {
            id: 2,
            name: 'Table 2'
            },
            {
            id: 3,
            name: 'Table 3'
            },
            {
            id: 4,
            name: 'Table 4'
            },
            {
            id: 5,
            name: 'Table 5',
            },
            {
            id: 6,
            name: 'Table 6'
            },
            ]

            return(
                <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
                <div className='bgTennis'></div>
                <div className="card card-reserv">
                    <h3 className="card-header header-text">Reservation</h3>
                    <div className="card-body">
                        <div style={{marginLeft: '6px'}}>
                            <div className="row">
                                <div className="col-sm-4 col-md-3 col-lg-2">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>         
                                        <KeyboardDatePicker         
                                        id="date-picker-dialog"
                                        label="Select date"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>  
                                <div className="col-sm-5 col-md-4 time-select">
                                    <TimeSelect date={selectedDate} type='Tennis' objNames={selectedObjects}/>
                                </div>                                
                            </div>                     
                            <div className="tennis">
                                <div id='count_' className='count'>Selected tables : 0</div>
                                <div className="row">
                                    {tables.map(item => (
                                        <div key={item.id}
                                        id={item.name} 
                                        className='mesta' 
                                        style={{backgroundColor: item.reserv ? 'SlateGray' : 'silver'}}> 
                                        <div onClick={this.updateObjects} style={{marginTop: '13px'}}>{item.name}</div>
                                        </div>
                                    ))}
                                </div>        
                            </div>           
                        </div> 
                        <MDBAlert  color='danger' className={error ? '' : ' sr-only'} dismiss>Check the correctness of the entered data</MDBAlert>
                        <MDBBtn onClick={() => this.onSubmit()} className="teal darken-2" style={{marginTop: '30px'}}>Reserve</MDBBtn>
                    </div>
                </div>           
             </div>   
            )
        }
}

export default TennisReservation;