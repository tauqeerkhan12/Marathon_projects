import React from 'react';
import './style.css';
import { Link } from 'react-router';
import ActionBundle from '../actions/actionbundle.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';

function mapStateToComp(state) {
    return {
        complaint: state.OpenFeature.decideToShow
    }
}

function mapDispatchToComp(dispatch) {
    return {
        reset: () => { Store.dispatch(ActionBundle.RESET()) }
    }
}

class ReportFileComp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            selectedReportType: '',
            selectedArea: '',
            selectedTitle: '',
            selectedDiscription: ''
        }
    }

    reset() {
        this.props.reset();
        localStorage.removeItem('locallySavedName');
    }

    reportType(event) {
        var v = event.target.value;
        this.setState({
            selectedReportType: v
        })
    }

    area(event) {
        var v = event.target.value;
        this.setState({
            selectedArea: v
        })
    }

    Title(event) {
        var v = event.target.value;
        this.setState({
            selectedTitle: v
        })
    }

    Description(event) {
        var v = event.target.value;
        this.setState({
            selectedDiscription: v
        })
    }

    submitReport(event) {
        console.log(this.state);
    }


    render() {
        return (
            <div className="wrapper">
                <div className="sidebar" data-background-color="white" data-active-color="danger">

                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a href="http://www.creative-tim.com" className="simple-text">
                                {localStorage.getItem('locallySavedName')}
                            </a>
                        </div>

                        <ul className="nav">
                            <li>
                                <Link to={{ pathname: '/' }}>
                                    <i className="ti-panel"></i>
                                    <p>Dashboard</p>
                                </Link>
                            </li>
                            {/*<li className="active">
                    <a href="user.html">
                        <i className="ti-user"></i>
                        <p>User Profile</p>
                    </a>
                </li>*/}
                            <li className="active" style={{ display: 'block' }} >
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
                                            <p>Settings</p>
                                            <b className="caret"></b>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to={{ pathname: './login' }}>Log In</Link></li>
                                            <li><Link onClick={this.reset.bind(this)} to={{ pathname: './signup' }}>Sign Out</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="card card-user">
                                        <div className="image">
                                            <img src="assets/img/background.jpg" alt="..." />
                                        </div>
                                        <div className="content">
                                            <div className="author">
                                                <img className="avatar border-white" src="assets/img/faces/face-2.jpg" alt="..." />
                                                <h4 className="title">{localStorage.getItem('locallySavedName')}<br />
                                                    <a href="#"><small>@{localStorage.getItem('locallySavedName')}</small></a>
                                                </h4>
                                            </div>
                                            <p className="description text-center">
                                                "I like the way you work it <br />
                                                No diggity <br />
                                                I wanna bag it up"
                                </p>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <div className="row">
                                                <div className="col-md-3 col-md-offset-1">
                                                    <h5>12<br /><small>Files</small></h5>
                                                </div>
                                                <div className="col-md-4">
                                                    <h5>2GB<br /><small>Used</small></h5>
                                                </div>
                                                <div className="col-md-3">
                                                    <h5>24,6$<br /><small>Spent</small></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Report a file</h4>
                                        </div>
                                        <div className="content">
                                            <form>
                                                <div className="form-group">
                                                    <label>Report Type</label>
                                                    <select className="form-control form-control-selectpicker" onChange={this.reportType.bind(this)} style={{ marginBottom: '20px' }}>
                                                        <option value="0">Type</option>
                                                        <option value="Crime">Crime</option>
                                                        <option value="Missing">Missing</option>
                                                        <option value="Complaint">Complaint</option>
                                                    </select>

                                                </div>
                                                <div className="form-group">
                                                    <label>Area</label>
                                                    <select onChange={this.area.bind(this)} className="form-control form-control-selectpicker" >
                                                        <option value="0">Select Area</option>
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

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Title</label>
                                                            <input onChange={this.Title.bind(this)} type="text" className="form-control border-input" placeholder="Here can be your title" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Description</label>
                                                            <textarea onChange={this.Description.bind(this)} rows="5" className="form-control border-input" placeholder="Here can be your description" ></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <input type='button' onClick={this.submitReport.bind(this)} className="btn btn-info btn-fill btn-wd" value='Report' />
                                                </div>
                                                <div className="clearfix"></div>
                                            </form>
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

export const ReportFile = connect(mapStateToComp, mapDispatchToComp)(ReportFileComp);

{/*<div>Report A file
            <Link to={{ pathname: '/' }}>Back</Link>
            </div>*/}