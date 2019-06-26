import React from "react"
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ReactLoading from "react-loading";

import Index from './Index/Index'

const GET_POSTS = gql`
  query getPosts($tag: String) {
      posts(tag: $tag) {
        id
        header
        summary
        short
        state
        tags
        insertedAt
    }
  }
`;

const Blog = ({ match, location}) => (
  <Query query={GET_POSTS} variables={ parseSearchParams(location.search) }>
    {({ loading, error, data }) => {
      if (loading) return <ReactLoading type="bubbles" color="#111" />;
      if (error) return `Error! ${error.message}`;
      return <Index posts={data.posts}/>;
    }}
  </Query>
);

function parseSearchParams(search) {
  const params = new URLSearchParams(search);
  const tag = params.get('tag');
  return({tag: tag});
}

export default Blog
