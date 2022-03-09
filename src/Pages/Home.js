import Admission from "../Admission/Admission";
import LearningEnvironment from "../LearningEnvironment";
import Dashboard from "../Templates/Dashboard";

function emulateRequest() {
  return {
    id: 1,
    uid: 9,
  };
}

function Home() {
  const { id, uid } = emulateRequest();
  console
  return (
    <Dashboard
      childrenTop={
        <>
          <LearningEnvironment userId={id} />
        </>
      }
      childrenBottom={
        <>
          <Admission userId={uid} />
        </>
      }
    />
  );
}

export default Home;
