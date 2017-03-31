import React from 'react';
import './style.css';
import { Link } from 'react-router';

export class Missings extends React.Component{

    render(){
        
        return (
            <div>
                Missings Page<br/>
                <Link to={{ pathname: './missingReportForm' }}>Report missing</Link>
            </div>

        )
    }
}