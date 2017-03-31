import React from 'react';
import './style.css';
import { Link } from 'react-router';

export class Crimes extends React.Component{

    render(){
        return (
            <div>
                Crimes Page<br />
                <Link to={{ pathname: './crimeReportForm' }}>Report Crime</Link>                
            </div>

        )
    }
}