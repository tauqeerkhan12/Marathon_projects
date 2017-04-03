import React from 'react';
import './style.css';
import { Link } from 'react-router';
import ActionBundle from '../actions/actionbundle.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';

function mapStateToComp(state) {
    return {
        green: state.forGreen,
        red: state.forRed
    }
}

function mapDispatchToComp(dispatch) {
    return {
        crime_info: (info) => { Store.dispatch(ActionBundle.CRIME_INFO(info)) },
         off_alert: () => { Store.dispatch(ActionBundle.OFF_ALERT()) },
        invalid_fields: () => { Store.dispatch(ActionBundle.INVALID_FIELDS()) }
    }
}

class CrimeReportFormComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            crimeDate: '',
            victimName: '',
            crimeType: '',
            crimeArea: '',
            cnicNo: '',
            phoneNo: ''
        }
    }

    saveDate(event) {
        var boxVal = event.target.value;
        this.setState({
            crimeDate: boxVal
        })
    }

    saveName(event) {
        var boxVal = event.target.value;
        this.setState({
            victimName: boxVal
        })
    }

    saveCrimeType(event) {
        var boxVal = event.target.value;
        this.setState({
            crimeType: boxVal
        })
    }


    saveCrimeArea(event) {
        var boxVal = event.target.value;
        this.setState({
            crimeArea: boxVal
        })
    }

    saveCnic(event) {
        var boxVal = event.target.value;
        this.setState({
            cnicNo: boxVal
        })
    }

    savePhone(event) {
        var boxVal = event.target.value;
        this.setState({
            phoneNo: boxVal
        })
    }

    saveAll() {

        if (this.state.crimeDate !== '' && this.state.victimName !== '' && this.state.crimeType !== '' && this.state.crimeArea !== '' && this.state.cnicNo !== '' && this.state.phoneNo !== '') {

            var info = this.state;

            this.props.crime_info(info)

        }
        else {
            this.props.invalid_fields();
        }
    }

    componentWillUnmount(){
        if(this.props.location.pathname == './crimeReportForm'){
                this.props.off_alert();
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <form className="form-horizontal">
                            <fieldset>

                                <legend>Crime Report Form</legend>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput">Date of Accident</label>
                                    <div className="col-md-4">
                                        <input id="textinput" onChange={this.saveDate.bind(this)} name="textinput" type="Date" className="form-control input-md" />

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput">Victim name</label>
                                    <div className="col-md-4">
                                        <input id="textinput" onChange={this.saveName.bind(this)} name="textinput" type="text" className="form-control input-md" />

                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput">Crime type</label>
                                    <div className="col-md-4" >
                                        <select className="form-control form-control-selectpicker" onChange={this.saveCrimeType.bind(this)}>   
                                            <option value=" ">Select type</option>
                                            <option value="Fraud‎">Fraud‎ </option>
                                            <option value="Robbery">Robbery</option>
                                            <option value="Murder">Murder </option>
                                            <option value="Theft">Theft‎ </option>
                                            <option value="Kidnapping‎">Kidnapping‎  </option>
                                            <option value="Torture‎">Torture‎ </option>
                                            <option value="Burglary">Burglary</option>
                                            <option value="Assault">Assault</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput" >Crime area</label>
                                    <div className="col-md-4">
                                        <select onChange={this.saveCrimeArea.bind(this)} className="form-control form-control-selectpicker" >
                                            <option value=" ">Select Area</option>
                                            <option value="GEORGIA">GEORGIA </option>
                                            <option value="FLORIDA">FLORIDA</option>
                                            <option value="COLORADO">COLORADO </option>
                                            <option value="CALIFORNIA">CALIFORNIA </option>
                                            <option value="WASHINGTON">WASHINGTON  </option>
                                            <option value="TEXAS">TEXAS </option>
                                            <option value="NEVADA">NEVADA</option>
                                            <option value="NEW YORK">NEW YORK</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput">CNIC no:</label>
                                    <div className="col-md-4">
                                        <input id="textinput" onChange={this.saveCnic.bind(this)} name="textinput" type="text" className="form-control input-md" />

                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput">Phone no:</label>
                                    <div className="col-md-4">
                                        <input id="textinput" onChange={this.savePhone.bind(this)} name="textinput" type="text" className="form-control input-md" />

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="textinput"></label>
                                    <div className="col-md-4">
                                        <center><input type="button" onClick={this.saveAll.bind(this)} className="btn btn-default" value='Report' /></center>
                                    </div>
                                </div>

                                <label className="col-md-4 control-label" htmlFor="textinput"></label>
                                <div className="col-md-4">
                                    <div className="alert alert-success" style={{ display: this.props.green }}>
                                        <strong>Succesfully</strong><span className="alert-link"> Register!</span>
                                    </div>
                               
                                    <div className="alert alert-danger" style={{ display: this.props.red}}>
                                        <strong>Invalid Fields!</strong>
                                    </div>
                                </div>

                            </fieldset>
                        </form>


                    </div>
                </div>
            </div>

        )
    }
}

export const CrimeReportForm = connect(mapStateToComp, mapDispatchToComp)(CrimeReportFormComponent);