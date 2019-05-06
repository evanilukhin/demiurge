import gql from 'graphql-tag';

export const GET_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      header
      summary
      short
      mainPart
      insertedAt
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($header: String!, $mainPart: String!, $short:Boolean!, $summary: String!) {
    createPost(header: $header, mainPart: $mainPart, summary: $summary, short: $short) {
        id
        header
        short
        summary
        mainPart
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($id: Int!, $mainPart: String!, $header: String!, $short:Boolean!, $summary: String!) {
    updatePost(id: $id, header: $header, mainPart: $mainPart, summary: $summary, short: $short) {
        id
        header
        short
        summary
        mainPart
    }
  }
`
