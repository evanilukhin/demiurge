import React from "react"

import style from './PersonalInfo.less'

export default class PersonalInfo extends React.Component {
  render(){
    const info = this.props.personalInfo;
    return(
      <div>
        <p><b>Name:</b>             {info.name}</p>
        <p><b>Soname:</b>           {info.soname}</p>
        <p><b>Date of birthday:</b> {info.dob}</p>
        <p><b>Citizenship</b>       {info.citizenship}</p>
        <p><b>Current location:</b> {info.current_location}</p>
      </div>
    );
  }
}
