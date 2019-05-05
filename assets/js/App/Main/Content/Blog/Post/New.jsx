import React, { Component } from 'react';
import { Mutation, ApolloConsumer, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EditForm from './EditForm';

import {CREATE_POST} from './queries'

const NewPost = graphql(CREATE_POST)(EditForm);

export default NewPost
