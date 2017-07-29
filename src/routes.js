import React from 'react'
import { Route, IndexRoute } from 'react-router'

import LayoutComponent from './components/LayoutComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';


const routes = (
  <Route path="/" component={LayoutComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="about" name="about" component={AboutComponent} />
    <Route path="contact" name="contact" component={ContactComponent} />
    <Route path="*" component={NotFoundComponent} />
  </Route>
);

export default routes;