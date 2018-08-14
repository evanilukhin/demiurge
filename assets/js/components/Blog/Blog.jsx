import React from "react"
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Index from './Index/Index'

const GET_POSTS = gql`
  {
    posts {
      id
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
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return <Index posts={data.posts}/>;
      }}
    </Query>
  );
}
