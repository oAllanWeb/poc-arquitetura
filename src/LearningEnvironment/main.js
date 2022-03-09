import { ApolloProvider } from "@apollo/react-hooks";
import client from "./Infrastructor/graphql/client";
import LearningEnvironment from "./LearningEnvironment";
function main(props) {
  const { userId } = props;
  return (
    <ApolloProvider client={client()}>
      <LearningEnvironment userId={userId} />
    </ApolloProvider>
  );
}
export default main;
