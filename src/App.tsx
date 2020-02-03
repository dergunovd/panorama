import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { View, Configurator, Landing } from './components';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/p/:id" component={View} />
        <Route path="/configurator" component={Configurator} />
        <Route path="/" component={Landing} />
        <Redirect to="/p/1" />
      </Switch>
    </Router>
  );
};

export default App;
