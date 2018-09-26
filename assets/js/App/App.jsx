import React from "react"
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from "apollo-boost";
import { CookiesProvider } from 'react-cookie';

import Main from 'Components/Main/Main'

export default function App() {
  const client = new ApolloClient({uri: "/api/graphiql"});
  return(
    <CookiesProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ApolloProvider>
    </CookiesProvider>
  );
}
