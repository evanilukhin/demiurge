import React from "react"
export default class Education extends React.Component {
  render(){
    return(
      <div>
        <p><b>{this.props.education.name}</b></p>
        <p>{this.props.education.degree}</p>
        <p>{this.props.education.years}</p>
      </div>
    );
  }
}
