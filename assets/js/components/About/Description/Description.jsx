import React from "react"

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
    return(
      <div className={style.description}>
        <div>{this.state.full ? this.props.description.full : this.props.description.short}</div>
        <button className={style.button} onClick={this.changeFull.bind(this)}>
          {this.state.full ? "Collapse" : "See More"}
        </button>
      </div>
    );
  }
}
