import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://starwats-graphql-api.herokuapp.com/',
  cache: new InMemoryCache(),
});
