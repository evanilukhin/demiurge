import React from "react"

import Description from './Description/Description'
import Resume from './Resume/Resume'

import style from './About.less'

export default class About extends React.Component {
  render() {
    const aboutMe = this.props.aboutMe;
    return (
      <div className={style.content}>
        <Description about={aboutMe}/>
        <Resume resume={aboutMe.base.resume}/>
      </div>
    );
  }
}
