import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './components/App';
import Layout from './components/Layout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Layout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
