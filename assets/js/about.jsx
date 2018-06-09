import React from "react"
class About extends React.Component {
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
          <Decription descriptions={page.descriptions}/>
          <Contacts contacts={page.contacts}/>
          <PersonalInfo personal_info={page.personal_info}/>
          <Skills skills={page.skills}/>       
        </div>
      );
    }
  }
}

export default About
