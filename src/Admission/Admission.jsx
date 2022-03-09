import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Api from "./infrastructor/api";
import "./styles.css";

export default function Admission(props) {
  const { userId } = props;
  const [persons, setPersons] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    async function getItems() {
      const { data } = await Api.get(`episode/${userId}`);
      const { characters, name } = data;
      setTitle(name);
      const charactersList = characters
        .map((item) =>
          item.replace("https://rickandmortyapi.com/api/character/", "")
        )
        .join(",");

      const { data: results, error } = await Api.get(
        `character/${charactersList}`
      );
      setPersons(results);
    }
    getItems();
  }, []);
  return (
    <div className="Admission">
      <h2 className="Admission-title">{title}</h2>
      <div className="Admission-container">
        {persons.map((item) => (
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
