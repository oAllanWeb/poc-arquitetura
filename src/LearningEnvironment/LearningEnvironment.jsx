import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Card from "../components/Card/Card";
import "./styles.css";

export default function LearningEnvironment(props) {
  const { userId } = props;
  const QUERY = gql`
    query Characters($id: ID!) {
      episode(id: $id) {
        name
        characters {
          id
          name
          status
          species
          image
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(QUERY, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { episode } = data;
  const { name } = episode;
  const { characters } = episode;

  return (
    <div className="LearningEnvironment">
      <h2 className="LearningEnvironment-title">{name}</h2>
      <div className="LearningEnvironment-container">
        {characters.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            species={item.spacies}
          />
        ))}
      </div>
    </div>
  );
}
