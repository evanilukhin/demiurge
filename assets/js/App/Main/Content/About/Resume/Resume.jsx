import React from "react"

import PersonalInfo from './PersonalInfo/PersonalInfo'
import Education from './Education/Education'
import Skills from './Skills/Skills'

import wrapAsTab from './wrapAsTab/wrapAsTab'

import style from './Resume.less'

export default class Resume extends React.Component {
  render() {
    const resume = this.props.resume;
    const WrappedPersonalInfo = wrapAsTab(PersonalInfo);
    const WrappedEducation = wrapAsTab(Education);
    const WrappedSkills = wrapAsTab(Skills);
    return (
      <div className={ style.content }>
        <WrappedPersonalInfo header={ 'Personal Info' } personalInfo={resume.personal_info}/>
        <WrappedEducation header={ 'Education' } education={resume.education}/>
        <WrappedSkills header={ 'Skills' } skills={resume.skills}/>
      </div>
    );
  }
}
