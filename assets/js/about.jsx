import React from "react"
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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
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
        <ul>
          <li><b>name:</b> {page.name}</li>
          <li><b>soname:</b> {page.soname}</li>
        </ul>
      );
    }
  }
}
