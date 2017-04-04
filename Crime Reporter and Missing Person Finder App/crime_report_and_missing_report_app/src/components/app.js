
import React from 'react';
import './style.css';
import { Link } from 'react-router';


export class App extends React.Component {

  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Sindh Police</a>
            </div>
            <center>
              <div className="navbar-collapse collapse">

                <ul id="parentEle" className="nav navbar-nav">
                </ul>
                <div id="userIn">
                  <div className="nav navbar-nav">

                    <li className="active"> <Link to={{ pathname: "/" }}>Crimes</Link> </li>
                    <li id="missingPers"> <Link to={{ pathname: "./missings" }}>Missings</Link> </li>
                    <li> <Link to={{ pathname: "./complaints" }}>complaints</Link> </li>
                  </div>

                  <form className="navbar-form navbar-right" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" id="userName" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="Password" name="password" placeholder="Password" />
                    </div>

                    <input style={{ marginLeft: '5px', width: '76px' }} className="btn btn-default" defaultValue="Sign In" />
                    <Link to={{ pathname: './signup' }}><input style={{ marginLeft: '5px', width: '76px' }} className="btn btn-default" defaultValue='Sign Up' /></Link>
                  </form>
                </div>
              </div>
            </center>

          </div>
        </div>
        <div style={{margin: '0px auto' ,width: '800px', marginTop: '70px' }} id="pageContent">
          <div>{this.props.children}</div>
        </div>

      </div>
    );
  }
}
