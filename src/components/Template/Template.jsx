import Header from "../Header";
import SideBar from "../SideBar";
import "./styles.css";
function Template(props) {
  const { children } = props;
  return (
    <div className="container">
      <Header />
      <SideBar />
      <main className="content">{children}</main>
    </div>
  );
}

export default Template;
