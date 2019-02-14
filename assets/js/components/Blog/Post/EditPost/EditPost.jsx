import React, { Component } from 'react';
import { Mutation, ApolloConsumer, Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EditForm from 'Components/Blog/Post/EditForm/EditForm';

const UPDATE_POST = gql`
  mutation updatePost($id: Int!, $mainPart: String!) {
    updatePost(id: $id, header: $header, mainPart: $mainPart) {
        id
        header
        mainPart
    }
  }
`

const EditFormWithMutator = graphql(UPDATE_POST)(EditForm);

const GET_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      header
      mainPart
    }
  }
`

const EditPost = ({ match }) => (
  <Query query={GET_POST} variables={ match.params }>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      return (
        <EditFormWithMutator post = { data.post } />
      );
    }}
  </Query>
);

export default EditPost
