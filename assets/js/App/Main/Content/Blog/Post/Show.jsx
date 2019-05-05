import React, { Component } from 'react';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

import Post from './Post'
import { GET_POST } from './queries'

export default function ShowPost ({match}){
  return (
    <Query query={GET_POST} variables={ match.params }>
      {({ loading, error, data }) => {
        if (loading) return <ReactLoading type="bubbles" color="#111" />;
        if (error) return `Error! ${error.message}`;
        return <Post post={data.post}/>;
      }}
    </Query>
  );
}
