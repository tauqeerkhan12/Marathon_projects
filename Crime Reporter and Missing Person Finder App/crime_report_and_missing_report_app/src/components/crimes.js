import React from 'react';
import './style.css';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import './style.css';


export class Crimes extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        var item = [];
        firebase.database().ref('/CrimesReported').on('value', (snap) => {
            snap.forEach((secSnap) => {

                item.push(secSnap.val());
            })

            this.getThatAry(item);
        });
    }

    getThatAry(item) {

        this.setState({
            list: item
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="panel panel-default widget">
                        <div className="panel-heading">
                            <h3 className="panel-title">Reported Crimes</h3>
                            <span className="label label-info">{this.state.list.length}</span>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {
                                    this.state.list.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">{info.victimName}</a></div> <div><span className="mic-info">Victim Cnic:</span> {info.cnicNo}</div><div><span className="mic-info">Crime Faced: </span>{info.crimeType}</div><div><span className="mic-info">Area: </span>{info.crimeArea}</div><div><span className="mic-info">Crime Date: </span>{info.crimeDate}</div> <div><span className="mic-info">phone No: </span>{info.phoneNo}</div></div> </div> </li> })
                                }
                            </ul>
                             <Link className="btn btn-primary btn-sm btn-block" role="button" style={{ fontSize: '17px' }} to={{ pathname: './crimeReportForm' }}>Report Crime</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}