import React from "react"
import ReactMarkdown from 'react-markdown'

import style from './Description.less'

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { full: false };
  }

  changeFull(){
    this.setState({full: !this.state.full})
  }

  render() {
    const about = this.props.about
    return(
      <div className={style.description}>
        { this.state.full ? <ReactMarkdown source={about.extended}/> : <div> {about.base.description} </div> }
        <button className={style.button} onClick={this.changeFull.bind(this)}>
          {this.state.full ? "Collapse" : "See More"}
        </button>
      </div>
    );
  }
}
