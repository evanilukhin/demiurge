import gql from 'graphql-tag';

export const GET_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      header
      mainPart
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($header: String!, $mainPart: String!) {
    createPost(header: $header, mainPart: $mainPart) {
        id
        header
        mainPart
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($id: Int!, $mainPart: String!, $header: String!) {
    updatePost(id: $id, header: $header, mainPart: $mainPart) {
        id
        header
        mainPart
    }
  }
`
