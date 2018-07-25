import React from "react"

import {
  Route,
  Switch
} from 'react-router-dom'

import Blog from 'Components/Blog/Blog'
import About from 'Components/About/About'

export default class Content extends React.Component {
  render() {
    const aboutMe = this.props.aboutMe;

    return(
      <Switch>
        <Route exact path="/" render={ () => <About aboutMe={aboutMe}/> }/>
        <Route path="/blog" component={Blog}/>
      </Switch>
    );
  }
}
