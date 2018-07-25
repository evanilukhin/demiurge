import React from "react"

import PersonalInfo from './PersonalInfo/PersonalInfo'
import Education from './Education/Education'
import Skills from './Skills/Skills'

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
    return (
      <div>
        <div className={ content }>
          <PersonalInfo personalInfo={resume.personal_info}/>
          <Education education={resume.education}/>
          <Skills skills={resume.skills}/>
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
