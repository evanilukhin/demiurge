import React from "react"
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Blog from './blog'
import About from './about'

const Main = () => (
    <div>
      <header>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </header>
      <hr/>
      <main>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/blog" component={Blog}/>
        </Switch>
      </main>
    </div>
)

export default Main
