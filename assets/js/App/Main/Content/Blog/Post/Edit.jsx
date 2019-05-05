import React, { Component } from 'react';
import { Mutation, ApolloConsumer, Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {GET_POST, UPDATE_POST} from './queries'
import EditForm from './EditForm';

const EditFormWithMutator = graphql(UPDATE_POST)(EditForm);

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
