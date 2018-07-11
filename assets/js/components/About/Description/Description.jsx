import React from "react"

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
      <div>
        <div>{this.state.full ? this.props.description.short : this.props.description.full}</div>
        <button onClick={this.changeFull.bind(this)}>
          {this.state.full ? "See More" : "Collapse"}
        </button>
      </div>
    );
  }
}
