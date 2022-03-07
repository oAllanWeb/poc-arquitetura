import Template from "../components/Template/Template";
import "./styles.css";
export default function Home(props) {
  const { childrenTop, childrenBottom } = props;
  return (
    <Template>
      <div className="Home">
        {!!childrenTop && (
          <section className="section-top">{childrenTop}</section>
        )}
        {!!childrenBottom && (
          <section className="section-bottom">{childrenBottom}</section>
        )}
      </div>
    </Template>
  );
}
