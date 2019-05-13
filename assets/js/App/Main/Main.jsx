import React from "react"
import ReactLoading from "react-loading";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Helmet } from "react-helmet";

import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import Footer from './Footer/Footer'

import style from './Main.less'

const GET_ABOUT = gql`
  {
    about {
      baseInformation
      extendedBio
    }
  }
`;

export default class Main extends React.Component {
  render() {
    return(
      <Query query={GET_ABOUT}>
        {({ loading, error, data }) => {
          if (loading) return <ReactLoading type="bubbles" color="#111" />;
          if (error) return `Error! ${error.message}`;
          const about = {
            base: JSON.parse(data.about.baseInformation),
            extended: data.about.extendedBio
          }
          return(
            <div className={style.main}>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Evan Ilukhin</title>
              </Helmet>

              <div className={style.content}>
                <Navbar />
                <Content aboutMe={about}/>
              </div>
              <Footer contacts={about.base.contacts}/>
            </div>
          );
        }}
      </Query>
  )};
}
