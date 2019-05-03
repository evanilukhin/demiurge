import React from "react"
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

import Index from './Index/Index'

const GET_POSTS = gql`
  {
    posts {
      id
      header
      mainPart
      state
      tags
    }
  }
`;

export default function Blog(){
  return (
    <Query query={GET_POSTS}>
      {({ loading, error, data }) => {
        if (loading) return <ReactLoading type="bubbles" color="#111" />;
        if (error) return `Error! ${error.message}`;
        return <Index posts={data.posts}/>;
      }}
    </Query>
  );
}
