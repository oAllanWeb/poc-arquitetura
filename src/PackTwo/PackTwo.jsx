import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Card from "../components/Card/Card";
import "./styles.css";

export default function PackTwo() {
  const QUERY = gql`
    query {
      episode(id: 9) {
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

  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { episode } = data;
  const { name } = episode;
  const { characters } = episode;

  return (
    <div className="PackTwo">
      <h2 className="PackTwo-title">{name}</h2>
      <div className="PackTwo-container">
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
