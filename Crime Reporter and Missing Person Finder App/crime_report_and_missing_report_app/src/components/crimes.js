import React from 'react';
import './style.css';
import { Link } from 'react-router';
import './style.css';
import ActionBundle from '../actions/actionbundle.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';
import signInMiddleware from '../middlewares/signInMiddleware.js';
import signoutMiddleware from '../middlewares/signoutMiddleware';
import fetchReportMiddleware from '../middlewares/fetchReportMiddleware.js';
import countAllReports from '../middlewares/countAllReports.js';

import Dp from '../../images/round.png';


function mapStateToComp(state) {
    return {
        complaint: state.OpenFeature.decideToShow,
        login: state.OpenFeature.signIN,
        logout: state.OpenFeature.signOUT,
        COMPLAINT: state.Tabs.complaintTab,
        MISSING: state.Tabs.missingTab,
        CRIME: state.Tabs.crimeTab,
        TOTALCOMPLAINT: state.Tabs.totalComplaint,
        TOTALMISSING: state.Tabs.totalMissing,
        TOTALCRIMES: state.Tabs.totalCrimes,
        TOTAL: state.Tabs.Total

    }
}

function mapDispatchToComp(dispatch) {
    return {
        reset: () => { Store.dispatch(ActionBundle.RESET()) },
        signin: () => { Store.dispatch(signInMiddleware.SIGNIN()) },
        signout: () => { Store.dispatch(signoutMiddleware.SIGNOUT()) },
        retrieveReports: (cityName) => { Store.dispatch(fetchReportMiddleware.fetchReport(cityName)) },
        allreports: () => { Store.dispatch(countAllReports.countAllReports()) }
    }
}

export class CrimesComp extends React.Component {

    constructor(props) {
        super(props)

        this.props.allreports();

        this.state = {
            runIt: true
        }
    }

    showTotal() {

        this.state = {
            TC: this.props.TOTALCOMPLAINT,
            TM: this.props.TOTALMISSING,
            TCR: this.props.TOTALCRIMES,
            TT: this.props.TOTAL,
            runIt: true
        }
    }

    facebookSignin() {
        this.props.signin();
    }

    facebookSignout() {
        this.props.signout();
    }

    city(event) {
        var cityName = event.target.value;
        this.props.retrieveReports(cityName);

        this.setState({
            TC: Store.getState().Tabs.complaintTab.length,
            TM: Store.getState().Tabs.missingTab.length,
            TCR: Store.getState().Tabs.crimeTab.length,
            TT: Store.getState().Tabs.crimeTab.length + Store.getState().Tabs.missingTab.length + Store.getState().Tabs.complaintTab.length,
            runIt: false
        })
    }

    render() {
        if (this.state.runIt == true) {
            this.showTotal();
        }
        console.log('render');
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar" data-background-color="white" data-active-color="danger">

                        <div className="sidebar-wrapper">
                            <div className="logo">
                                <a href="http://www.creative-tim.com" className="simple-text">
                                    {localStorage.getItem('locallySavedName')}
                                </a>
                            </div>

                            <ul className="nav">
                                <li className="active">
                                    <Link to={{ pathname: '/' }}>
                                        <i className="ti-panel"></i>
                                        <p>Dashboard</p>
                                    </Link>
                                </li>
                                {/*<li>
                    <a href="user.html">
                        <i className="ti-user"></i>
                        <p>User Profile</p>
                    </a>
                </li>*/}
                                <li style={{ display: this.props.complaint }} >
                                    <Link to={{ pathname: './reportFile' }}>
                                        <i className="ti-view-list-alt"></i>
                                        <p>Report a File</p>
                                    </Link>
                                </li>
                                {/*<li>
                    <a href="typography.html">
                        <i className="ti-text"></i>
                        <p>Typography</p>
                    </a>
                </li>
                <li>
                    <a href="icons.html">
                        <i className="ti-pencil-alt2"></i>
                        <p>Icons</p>
                    </a>
                </li>
                <li>
                    <a href="maps.html">
                        <i className="ti-map"></i>
                        <p>Maps</p>
                    </a>
                </li>
                <li>
                    <a href="notifications.html">
                        <i className="ti-bell"></i>
                        <p>Notifications</p>
                    </a>
                </li>
				<li className="active-pro">
                    <a href="upgrade.html">
                        <i className="ti-export"></i>
                        <p>Upgrade to PRO</p>
                    </a>
                </li>*/}
                            </ul>
                        </div>
                    </div>

                    <div className="main-panel">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar bar1"></span>
                                        <span className="icon-bar bar2"></span>
                                        <span className="icon-bar bar3"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">Dashboard</a>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="ti-settings"></i>
                                                <p>Account</p>
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link onClick={this.facebookSignin.bind(this)} style={{ display: this.props.login, cursor: 'pointer' }} >Sign In</Link></li>
                                                <li><Link onClick={this.facebookSignout.bind(this)} style={{ display: this.props.logout, cursor: 'pointer' }}>Sign Out</Link></li>
                                                {console.log(this.props.login, this.props.logout)}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>


                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="fa fa-bar-chart"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Total</p>
                                                            {this.state.TT}
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-success text-center">
                                                            <i className="fa fa-sign-language"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Crime</p>
                                                            {this.state.TCR}
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-danger text-center">
                                                            <i className="fa fa-user-times"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Missing</p>
                                                            {this.state.TM}
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="card" style={{ display: this.props.complaint }}>
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-info text-center">
                                                            <i className="fa fa-legal"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Complaints</p>
                                                            {this.state.TC}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="header" style={{ paddingLeft: '17px' }}>
                                                <h4 className="title">Filter Report</h4>
                                                <p className="category">By city</p><br />

                                                <div className="form-group">
                                                    <select className="form-control form-control-selectpicker" onChange={this.city.bind(this)}>
                                                        <option value="0">Select any City</option>
                                                        <option value="Houston">Houston</option>
                                                        <option value="San Antonio">San Antonio</option>
                                                        <option value="Austin">Austin</option>
                                                        <option value="Columbus">Columbus</option>
                                                        <option value="Washington">Washington</option>
                                                        <option value="Boston">Boston</option>
                                                        <option value="Rochester">Rochester</option>
                                                        <option value="Pueblo">Pueblo</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="card">
                                                            <ul className="nav nav-tabs" role="tablist">
                                                                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Crime</a></li>


                                                                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Missing</a></li>


                                                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab" style={{ display: this.props.complaint }}>Complaint</a></li>
                                                            </ul>

                                                            <div className="tab-content">
                                                                <div role="tabpanel" className="tab-pane active" id="home">

                                                                    <div className="panel panel-default widget">
                                                                        <div className="panel-body">
                                                                            <ul className="list-group">
                                                                                {
                                                                                    this.props.CRIME.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="#">{info.loginUserName}</a></div> <div><span className="mic-info">Title: </span>{info.selectedTitle}</div><div><span className="mic-info">Discription: </span>{info.selectedDiscription}</div> </div> </div> </li> })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div role="tabpanel" className="tab-pane" id="profile">
                                                                    <div className="panel panel-default widget">
                                                                        <div className="panel-body">
                                                                            <ul className="list-group">
                                                                                {
                                                                                    this.props.MISSING.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="#">{info.loginUserName}</a></div> <div><span className="mic-info">Title: </span>{info.selectedTitle}</div><div><span className="mic-info">Discription: </span>{info.selectedDiscription}</div> </div> </div> </li> })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div role="tabpanel" className="tab-pane" id="messages">
                                                                    <div className="panel panel-default widget">
                                                                        <div className="panel-body">
                                                                            <ul className="list-group">
                                                                                {
                                                                                    this.props.COMPLAINT.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="#">{info.loginUserName}</a></div> <div><span className="mic-info">Title: </span>{info.selectedTitle}</div><div><span className="mic-info">Discription: </span>{info.selectedDiscription}</div> </div> </div> </li> })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div role="tabpanel" className="tab-pane" id="settings"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="content">
                                                <div id="chartHours" className="ct-chart"></div>
                                                <div className="footer">
                                                    <div className="chart-legend">
                                                        <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Click
                                        <i className="fa fa-circle text-warning"></i> Click Second Time
                                    </div>
                                                    <hr />
                                                    <div className="stats">
                                                        <i className="ti-reload"></i> Updated 3 minutes ago
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        )
    }
}

export const Crimes = connect(mapStateToComp, mapDispatchToComp)(CrimesComp);