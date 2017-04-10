import React from 'react';
import './style.css';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import './style.css';
import ActionBundle from '../actions/actionbundle.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';
import signInMiddleware from '../middlewares/signInMiddleware.js';
import signoutMiddleware from '../middlewares/signoutMiddleware';


function mapStateToComp(state) {
    return {
        complaint: state.OpenFeature.decideToShow,
        login: state.OpenFeature.signIN,
        logout: state.OpenFeature.signOUT,
    }
}

function mapDispatchToComp(dispatch) {
    return {
        reset: () => { Store.dispatch(ActionBundle.RESET()) },
        signin: () => { Store.dispatch(signInMiddleware.SIGNIN()) },
        signout: () => { Store.dispatch(signoutMiddleware.SIGNOUT()) }
    }
}

export class CrimesComp extends React.Component {

    facebookSignin() {
        this.props.signin();
    }

    facebookSignout() {
        this.props.signout();
    }

    render() {
        return (
            <div>

                <div className="wrapper">
                    <div className="sidebar" data-background-color="white" data-active-color="danger">


                        {/*Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"*/}


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
                                                            <i className="ti-server"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Total</p>
                                                            14
                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <i className="ti-reload"></i> Updated now
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
                                                            <i className="ti-wallet"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Crime</p>
                                                            5
                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <i className="ti-calendar"></i> Last day
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
                                                            <i className="ti-pulse"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Missing</p>
                                                            3
                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <i className="ti-timer"></i> In the last hour
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
                                                            <i className="ti-twitter-alt"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p>Complaints</p>
                                                            45
                                        </div>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <hr />
                                                    <div className="stats">
                                                        <i className="ti-reload"></i> Updated now
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
                                                    <select className="form-control form-control-selectpicker">
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
                                                                <div role="tabpanel" className="tab-pane active" id="home"></div>
                                                                <div role="tabpanel" className="tab-pane" id="profile"></div>
                                                                <div role="tabpanel" className="tab-pane" id="messages"></div>
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