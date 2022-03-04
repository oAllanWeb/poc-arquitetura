export default function Home(props) {
  const { childrenTop, childrenBottom } = props;
  return (
    <div className="Home">
      {!!childrenTop && (
        <section className="section-top">{childrenTop}</section>
      )}
      {!!childrenBottom && (
        <section className="section-bottom">{childrenBottom}</section>
      )}
    </div>
  );
}
