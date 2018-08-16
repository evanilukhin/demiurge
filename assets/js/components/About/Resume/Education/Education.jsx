import React from "react"
export default class Education extends React.Component {
  render(){
    return(
      <div>
        <h3> First education </h3>
        <hr/>
        <div>
          <div>
            <b>Name:</b>
            <p>{this.props.education.name}</p>
          </div>
          <div>
            <b>Degree:</b>
            <p>{this.props.education.degree}</p>
          </div>
          <div>
            <p>{this.props.education.years}</p>
          </div>
        </div>
      </div>
    );
  }
}
