
import React from 'react';
import { Link } from 'react-router';
import './donarslist.css';
import icon from '../../icons/signout.png';
import * as firebase from 'firebase';
// import Filter from '../../js/filter.js'

export default class Donarlist extends React.Component {

    render() {
        var list = [];
        // var list = [
        //     {
        //         userAddress: 'gulshanC13',
        //         userBlood: 'O+',
        //         userCnic: '0234-12398172398',
        //         userContact: '03341231234',
        //         userName: 'Mojo Jojo'
        //     },
        //     {
        //         userAddress: 'gulshanC13',
        //         userBlood: 'O+',
        //         userCnic: '0234-12398172398',
        //         userContact: '03341231234',
        //         userName: 'Smith'
        //     },
        //     {
        //         userAddress: 'gulshanC13',
        //         userBlood: 'O+',
        //         userCnic: '0234-12398172398',
        //         userContact: '03341231234',
        //         userName: 'Smith'
        //     },
        //     {
        //         userAddress: 'gulshanC13',
        //         userBlood: 'O+',
        //         userCnic: '0234-12398172398',
        //         userContact: '03341231234',
        //         userName: 'Smith'
        //     }
        // ];



        firebase.database().ref('/DonarList').on('value', (snap) => {
            snap.forEach((secTow) => {

                var obj = {
                    userAddress: secTow.val().userAddress,
                    userBlood: secTow.val().userBlood,
                    userCnic: secTow.val().userCnic,
                    userContact: secTow.val().userContact,
                    userName: secTow.val().userName
                }

                list.push(obj)

            })
        })


        return (
            <div>
                <div className="menu">
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
                            <div className="panel-heading">
                                {/*<span className="glyphicon glyphicon-comment"></span>*/}
                                <h3 className="panel-title">Donars List</h3>
                                <span className="label label-info">{list.length}</span>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {/*<li className="list-group-item">
                                        <div className="row">
                                            <div className="col-xs-2 col-md-1">
                                                <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" />
                                            </div>
                                            <div className="col-xs-10 col-md-11">
                                              
                                            </div>
                                        </div>
                                    </li>*/}

                                    {list.map((info, index) => { return <li key={index} style={{cursor: 'pointer'}} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{fontSize: '17px'}}><a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">{info.userName}</a></div> <div className="mic-info">Blood Group {info.userBlood}</div><div><span className="mic-info">Phone: </span>{info.userContact}</div><div><span className="mic-info">CNIC: </span>{info.userCnic}</div><div><span className="mic-info">Address: </span>{info.userAddress}</div>  </div> </div> </li> })}

                                </ul>
                                {/*<a href="#" className="btn btn-primary btn-sm btn-block" role="button"><span className="glyphicon glyphicon-refresh"></span> More</a>*/}
                                <Link className="btn btn-primary btn-sm btn-block" role="button" style={{fontSize: '17px'}} to={{ pathname: './donationform' }}>Donate Blood</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/*
                <br /><br /><br /><br /><br />
                <table>
                    <tbody>
                        {list.map((info, index) => { return <tr key={index}><td>{info.userName}</td><td>{info.userContact}</td><td>{info.userCnic}</td><td>{info.userBlood}</td><td>{info.userAddress}</td></tr> } )}
                    </tbody>
                </table>
                <br /><br /><br /><br /><br />
                DonarList Page
                <button><Link to={{ pathname: './donationform' }}>Donate Blood</Link></button>*/}

            </div>
        )
    }

}


// <a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">Admin Panel Quick Shortcuts</a>