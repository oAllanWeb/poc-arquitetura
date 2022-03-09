import ApolloClient from "apollo-boost";

function client() {
  return new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
  });
}
export default client;
