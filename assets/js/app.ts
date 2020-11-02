import {createApp, provide, h} from 'vue';

import App from "./App.vue";
import router from "./router";

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { offsetLimitPagination } from '@apollo/client/utilities';
import { VueMarkdownIt } from 'vue3-markdown-it';
// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:4000/api/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    posts: offsetLimitPagination(),
                },
            },
        },
    }),
})

createApp(
    {
        setup() {
            provide(DefaultApolloClient, apolloClient)
        },
        render() {
            return h(App)
        }
    }
).use(router).use(VueMarkdownIt).mount('#app');
