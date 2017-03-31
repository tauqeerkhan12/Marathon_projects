import React from 'react';
import './style.css';
import {Store} from '../store/store.js';
import ActionBundle from '../actions/actionbundle.js';
import { connect } from 'react-redux';

function mapStateToComp(state) {
    return {
        green: state.forGreen,
        red: state.forRed
    }
}

function mapDispatchToComp(dispatch) {
    return {
        add_me_to_list: (userInfo) => { Store.dispatch(ActionBundle.ADD_ME_TO_LIST(userInfo)) },
        off_alert: () => { Store.dispatch(ActionBundle.OFF_ALERT()) },
        invalid_fields: () => { Store.dispatch(ActionBundle.INVALID_FIELDS()) }
    }
}


class Signup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            userEmail: '',
            userPassword: ''
        }
    }

    saveName(event) {
        var inputValue = event.target.value;
        this.setState({
            userName: inputValue
        })
        this.props.off_alert();
    }

    saveEmail(event) {
        var inputValue = event.target.value;
        this.setState({
            userEmail: inputValue
        })
        this.props.off_alert();
    }

    savePassword(event) {
        var inputValue = event.target.value;
        this.setState({
            userPassword: inputValue
        })
        this.props.off_alert();
    }

    sendAll() {

        var userInfo = {
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword
        }

        if (this.state.userName !== '' && this.state.userEmail !== '' && this.state.userPassword !== '') {
            // console.log(userInfo);
            this.props.add_me_to_list(userInfo);
        }
        else {
                this.props.invalid_fields();
        }
    }

    componentWillUnmount(){
        if(this.props.location.pathname === './signup'){
                this.props.off_alert();
                // console.log(this.props.location.pathname);
        }
    }

    render() {
        return (
            <div>
                <div className="row centered-form">
                    <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please sign up</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <input type="text" onChange={this.saveName.bind(this)} name="username" id="usernaam" className="form-control input-sm" placeholder="UserName" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" onChange={this.saveEmail.bind(this)} name="email" id="email" className="form-control input-sm" placeholder="Email Address" />
                                    </div>
                                    {/*<div className="row">*/}
                                    {/*<div className="col-xs-6 col-sm-6 col-md-6">*/}
                                    <div className="form-group">
                                        <input type="password" onChange={this.savePassword.bind(this)} name="password" id="password" className="form-control input-sm" placeholder="Password" />
                                    </div>
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    <input type='button' onClick={this.sendAll.bind(this)} className="btn btn-info btn-block" value='Register' />
                                </form>
                                <br />
                                <div className="alert alert-success" style={{ display: this.props.green }}>
                                    <strong>Succesfully</strong><span className="alert-link"> Register!</span>
                                </div>

                                <div className="alert alert-danger" style={{ display: this.props.red }}>
                                    <strong>Invalid Fields!</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export const Register = connect(mapStateToComp, mapDispatchToComp)(Signup);