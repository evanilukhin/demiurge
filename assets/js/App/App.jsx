import React from "react"
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from "apollo-boost";
import { CookiesProvider } from 'react-cookie';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Main from 'Components/Main/Main'

export default function App() {
  const requestHeader = async operation => {
    const token = await localStorage.getItem('encrypted_password');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  };

  const client = new ApolloClient({uri: '/api/graphiql', request: requestHeader});
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
