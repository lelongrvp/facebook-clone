import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="app-body">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
