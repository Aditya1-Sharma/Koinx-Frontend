import Header from "./component/Header/Header";
import CryptView from "./component/OverView/CryptView";
// import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-wrap content-between bg-gray-100">
        <div className="w-full">
          <Header />

          <CryptView />
        </div>
      </div>
    </>
  );
}

export default App;
