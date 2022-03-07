import { ApolloProvider } from "@apollo/react-hooks";
import client from "./Infrastructor/graphql/client";
import PackTwo from "./PackTwo";
function main() {
  return (
    <ApolloProvider client={client()}>
      <PackTwo />
    </ApolloProvider>
  );
}
export default main;
