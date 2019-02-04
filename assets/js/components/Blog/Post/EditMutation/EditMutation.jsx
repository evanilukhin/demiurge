import React, { Component } from 'react';
import { Mutation, ApolloConsumer, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EditForm from 'Components/Blog/Post/EditForm/EditForm';

const UPDATE_POST_MUTATION = gql`
  mutation updatePost($id: Int!, $mainPart: String!) {
    updatePost(id: $id, mainPart: $mainPart) {
        id
        mainPart
    }
  }
`
const EditMutation = graphql(UPDATE_POST_MUTATION)(EditForm);

export default EditMutation
