import React from "react"

import Contacts from 'Components/Contacts/Contacts'

import Description from './Description/Description'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import Education from './Education/Education'
import Skills from './Skills/Skills'

import style from './About.less'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      page: {}
    };
  }

  componentDidMount() {
    fetch("./api/v1/about?lang=en")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                page: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
  }

  render() {
    const { error, isLoaded, page } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={style.content}>
          <Description description={page.description}/>
          <PersonalInfo personalInfo={page.personal_info}/>
          <Education education={page.education}/>
          <Skills skills={page.skills}/>
          <Contacts contacts={page.contacts}/>
        </div>
      );
    }
  }
}
