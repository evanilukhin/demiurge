import React from "react"
import Description from './About/Description'
import PersonalInfo from './About/PersonalInfo'
import Education from './About/Education'
import Skills from './About/Skills'
import Contacts from './Contacts'

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
    fetch("http://0.0.0.0:4000/api/v1/about?lang=en")
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
        <div>
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
