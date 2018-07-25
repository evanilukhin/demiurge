import React from "react"
export default class PersonalInfo extends React.Component {
  render(){
    var rows = [];
    for (var prop in this.props.personalInfo) {
      rows.push(
        <div key={prop}>
          <b>{prop}:</b>
          <p>{this.props.personalInfo[prop]}</p>
        </div>
      );
    }
    return <div>{rows}</div>;
  }
}
