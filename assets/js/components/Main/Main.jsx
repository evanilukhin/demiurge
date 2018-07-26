import React from "react"

import Navbar from 'Components/Navbar/Navbar'
import Content from 'Components/Content/Content'
import Footer from 'Components/Footer/Footer'

import style from './Main.less'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      aboutMe: {}
    };
  }

  componentDidMount() {
    fetch("./api/v1/about?lang=en")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                aboutMe: result
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
    const { error, isLoaded, aboutMe } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={style.main}>          
          <div className={style.content}>
            <Navbar />
            <Content aboutMe={aboutMe}/>
          </div>
          <Footer contacts={aboutMe.contacts}/>
        </div>
      );
    }
  }
}
