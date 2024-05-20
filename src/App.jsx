import React from 'react';
import { Route, Switch } from 'wouter';
import Home from './Home';
import Dream from './Dream'; 


export default function App() {
  return (
    <div>
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dream" component={Dream} /> 
      </Switch>
    </div>
  );
}