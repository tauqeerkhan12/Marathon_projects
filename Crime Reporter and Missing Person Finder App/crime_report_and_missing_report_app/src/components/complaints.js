import React from 'react';
import './style.css';
import { Link } from 'react-router';

export class Complaints extends React.Component{

    render(){
        return (
            <div>
                Complaints Page<br/>
                 <Link to={{ pathname: './complaintReportForm' }}> Report Complaint</Link>
            </div>

        )
    }
}