import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import "./styles.css";
function Dashboard(props) {
  const { childrenTop, childrenBottom } = props;

  return (
    <div className="Dashboard">
      <Header />
      <SideBar />
      <main className="Dashboard-content">
        {!!childrenTop && (
          <section className="Dashboard-section-top">{childrenTop}</section>
        )}
        {!!childrenBottom && (
          <section className="Dashboard-section-bottom">
            {childrenBottom}
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
