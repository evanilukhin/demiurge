import React from "react"

import PersonalInfo from './PersonalInfo/PersonalInfo'
import Education from './Education/Education'
import Skills from './Skills/Skills'

import wrapAsTab from './wrapAsTab/wrapAsTab'

import style from './Resume.less'

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: true };
  }

  changeVisibility() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  getStyles() {
    if (this.state.isHidden) {
      return({ button: style.button_expand, content: style.content_hidden });
    } else {
      return({ button: style.button_collapse, content: style.content });
    }
  }

  render() {
    const resume = this.props.resume;
    const { button, content } = this.getStyles();
    const WrappedPersonalInfo = wrapAsTab(PersonalInfo);
    const WrappedEducation = wrapAsTab(Education);
    const WrappedSkills = wrapAsTab(Skills);
    return (
      <div>
        <div className={ content }>
          <WrappedPersonalInfo header={ 'Personal Info' } personalInfo={resume.personal_info}/>
          <WrappedEducation header={ 'Education' } education={resume.education}/>
          <WrappedSkills header={ 'Skills' } skills={resume.skills}/>
        </div>
        <button
          className={ button }
          onClick={ () => { this.changeVisibility() } }>
          Resume
        </button>
      </div>
    );
  }
}
