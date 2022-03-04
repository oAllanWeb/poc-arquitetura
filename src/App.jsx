import Home from "./Home/Home";
import PackOne from "./PackOne/PackOne";
import PackTwo from "./PackTwo/PackTwo";
import "./styles.css";

export default function App() {
  return (
    <Home
      childrenTop={
        <>
          <PackOne />
          <PackTwo />
        </>
      }
      childrenBottom={
        <>
          <PackOne />
          <PackTwo />
        </>
      }
    />
  );
}
