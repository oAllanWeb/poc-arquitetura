import "./styles.css";

function Card(props) {
  const { name, image, status, species } = props;
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <h3 className="card-title">{name}</h3>
      <p className="card-specie">{species}</p>
      <p className={`card-status card-status__${status}`}>{status}</p>
    </div>
  );
}
export default Card;
