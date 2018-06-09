import React from "react"

import {
  Route,
  Switch
} from 'react-router-dom'

import Blog from './blog'
import About from './about'

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route path="/blog" component={Blog}/>
    </Switch>
  </main>
)

export default Content
