
import React from 'react';
import { Link } from 'react-router';
import './style.css';
import icon from '../../icons/signout.png';
import Dp from '../../images/round.png';
import * as firebase from 'firebase';


export default class Donarlist extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {

        firebase.database().ref('/DonarList').on('value', (snap) => {
            this.state.list = []
            snap.forEach((secSnap) => {

                this.state.list.push(secSnap.val());
            })
            console.log("componentDidMount")

            this.setState({
                list: this.state.list
            })
        })
    }
// http://placehold.it/80
    dynamicList() {
        return (
            <div>
                {   
                    this.state.list.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">{info.userName}</a></div> <div className="mic-info">Blood Group {info.userBlood}</div><div><span className="mic-info">Phone: </span>{info.userContact}</div><div><span className="mic-info">CNIC: </span>{info.userCnic}</div><div><span className="mic-info">Address: </span>{info.userAddress}</div>  </div> </div> </li> })
                }
            </div>
        )
    }

    render() {

        return (
            <div>
                <div className="menu" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#">Blood Bank System</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={{ pathname: '/' }}><span><img src={icon} alt="signout" /> </span>Sign out</Link></li>
                                {/*<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ paddingTop: '100px' }}>
                    <div className="row">
                        <div className="panel panel-default widget">
                            <div className="panel-heading" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                                <h3 className="panel-title" style={{ color: 'white',  fontWeight: 'bold' }}>Donars List</h3>
                                <span className="label label-info" style={{ width: '50px', fontSize: '12px' }}>{this.state.list.length}</span>
                            </div>
                            <div className="panel-body">
                               
                                <ul className="list-group">
                                    {this.dynamicList()}
                                    {console.log("render")}
                                </ul>

                                <Link className="btn btn-primary btn-sm btn-block" role="button" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)', fontSize: '17px' }} to={{ pathname: './donationform' }}>Donate Blood</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
