import babyData from "./baby-data.json";
import MainContent from "./components/MainContent";
import "./css/App.css";

function App(): JSX.Element {
  return (
    <>
      <MainContent babyData={babyData} />
    </>
  );
}

export default App;
