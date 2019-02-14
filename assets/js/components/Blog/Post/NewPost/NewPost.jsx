import React, { Component } from 'react';
import { Mutation, ApolloConsumer, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EditForm from 'Components/Blog/Post/EditForm/EditForm';

const CREATE_POST_MUTATION = gql`
  mutation createPost($header: String!, $mainPart: String!) {
    createPost(header: $header, mainPart: $mainPart) {
        id
        header
        mainPart
    }
  }
`
const NewPost = graphql(CREATE_POST_MUTATION)(EditForm);

export default NewPost
