
import React from 'react';
import { Link } from 'react-router';
import './login.css';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            USERNAME: '',
            PASSWORD: ''
        }
    }

    usernameLoginTextBox(event) {
        var nameText = event.target.value;
        this.setState({
            USERNAME: nameText
        })
    }

    passwordLoginTextBox(event) {
        var passText = event.target.value;
        this.setState({
            PASSWORD: passText
        })
    }

    logIn() {

        var checkForLogin = false;

        var obj = {
            USERNAME: this.state.USERNAME,
            PASSWORD: this.state.PASSWORD
        }

        var refer = firebase.database().ref();
        refer.once('value', (snap) => {
            snap.forEach((usersnap) => {
                var nameInfo = usersnap.val().userName;
                var passInfo = usersnap.val().userPass;

                if (obj.USERNAME === nameInfo && obj.PASSWORD === passInfo) {
                    checkForLogin = true;
                    localStorage.setItem("locallySavedName", obj.USERNAME);
                    console.log("yes");
                }
            })

                if (checkForLogin === true) {
                    browserHistory.push("./donarslist")
                }
                else {
                    alert('Incorrect Information');
                }
        })

    }

    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: '90px' }}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-login">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <a href="#" className="active" id="login-form-link">Login</a>
                                        </div>
                                        <div className="col-xs-6">
                                            {/*<a href="#" id="register-form-link">Register</a>*/}
                                            <Link id="register-form-link" to={{ pathname: './register' }}>register</Link>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form id="login-form" role="form" style={{ display: 'block' }}>
                                                <div className="form-group">
                                                    <input type="text" onChange={this.usernameLoginTextBox.bind(this)} name="username" id="username" className="form-control" placeholder="Username" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" onChange={this.passwordLoginTextBox.bind(this)} name="password" id="password" className="form-control" placeholder="Password" />
                                                </div>
                                                <div className="form-group text-center">
                                                    <input type="checkbox" className="" name="remember" id="remember" />
                                                    <label htmlFor="remember"> Remember Me</label>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-sm-offset-3">
                                                            {/*<input type="submit" name="login-submit" style={{backgroundColor: '#5bc0de', color: 'white', borderColor:'#46b8da'}} id="login-submit" className="form-control btn btn-login" value="Login" />*/}
                                                             {/*to={{ pathname: './donarslist' }} */}
                                                             
                                                            <Link onClick={this.logIn.bind(this)} style={{ backgroundColor: '#5bc0de', color: 'white', borderColor: '#46b8da' }} className="form-control btn btn-login">Login</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="text-center">
                                                                <a href='#' className="forgot-password">Forgot Password?</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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