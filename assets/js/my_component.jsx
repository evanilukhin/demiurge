import React from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import About from "./about"
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { rendering_type } = this.props
    return (
      <HashRouter>
        <div>
           <ul className="header">
             <li><a href="/about">About</a></li>
             <li><a href="/blog">Blog</a></li>
           </ul>
           <div className="content">
              <Route path="/about" component={About}/>
           </div>
        </div>
      </HashRouter>
    )
  }
}
