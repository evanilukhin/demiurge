import React from "react"

import {
  Route,
  Switch
} from 'react-router-dom'

import Blog from './Blog'
import About from './About'

export default function Content(){
  return(
    <main>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/blog" component={Blog}/>
      </Switch>
    </main>
  );
}
