import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Crimes } from './components/crimes.js';
import { ReportFile } from './components/reportFile.js';
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
        <Route path='./reportFile' component={ReportFile} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
