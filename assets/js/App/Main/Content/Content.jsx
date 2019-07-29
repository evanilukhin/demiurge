import React from "react"

import {
  Route,
  Switch
} from 'react-router-dom'

import Blog     from './Blog/Blog'
import About    from './About/About'
import ShowPost from './Blog/Post/Show'
import NewPost  from './Blog/Post/New'
import EditPost from './Blog/Post/Edit'

export default class Content extends React.Component {
  render() {
    const aboutMe = this.props.aboutMe;
    return(
      <Switch>
        <Route exact path="/" render={Blog}/>
        <Route path="/about"          component={ () => <About aboutMe={aboutMe}/> }/>
        <Route path="/posts/new"      component={NewPost}/>
        <Route path="/posts/:id/edit" component={EditPost}/>
        <Route path="/posts/:id"      component={ShowPost}/>
        <Route path="/posts"          component={Blog}/>
      </Switch>
    );
  }
}
