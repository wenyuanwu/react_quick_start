// create react app
npm install -g create-react-app
create-react-app my-app
cd my-app/
npm start

// fetch api

fetch("https://")
	.then(this._onResponse)
	.then(this._onJsonReady)

_onResponse(response){
    return response.json();
  }

  _onJsonReady(json){

  }
// react router

npm install --save react-router-dom

import { Route, HashRouter } from 'react-router-dom';

const Root = () => (
  <HashRouter>
    // HashRouter can only have a single child component, so we wrap our routes in this div
    <div>
      <Header />
      <Route exact path="/" component={Feed} />
      <Route path="/users" component={Users} />
    </div>
  </HashRouter>
);

import {Link} from "react-router-dom";
<Link to="/about">About</Link>


