import React from "react"
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from "apollo-boost";

import Main from 'Components/Main/Main'

export default function App() {
  const client = new ApolloClient({uri: "/api/graphiql"});
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ApolloProvider>
  );
}
