import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Crimes } from './components/crimes.js';
import { Missings } from './components/missings.js';
import { Complaints } from './components/complaints.js';
import { CrimeReportForm } from './components/crimeReportForm.js';
import { MissingReportForm } from './components/missingReportForm';
import { ComplaintReportForm } from './components/complaintReportForm';
import { Register } from './components/signup.js';
import { Store } from './store/store.js';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBK3V22m1EFPezmnjms6_jgGTWesLDmns0",
  authDomain: "sindhpolice-1ecb2.firebaseapp.com",
  databaseURL: "https://sindhpolice-1ecb2.firebaseio.com",
  projectId: "sindhpolice-1ecb2",
  storageBucket: "sindhpolice-1ecb2.appspot.com",
  messagingSenderId: "548381741244"
};
firebase.initializeApp(config);


ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Crimes} />
        <Route path='./missings' component={Missings} />
        <Route path='./complaints' component={Complaints} />
        <Route path='./crimeReportForm' component={CrimeReportForm} />
        <Route path='./missingReportForm' component={MissingReportForm} />
        <Route path='./complaintReportForm' component={ComplaintReportForm} />
        <Route path='./signup' component={Register} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
