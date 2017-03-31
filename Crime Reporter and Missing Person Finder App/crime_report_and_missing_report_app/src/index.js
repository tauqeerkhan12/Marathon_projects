import React from 'react';
import ReactDOM from 'react-dom';
import  { App } from './components/app.js';
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
