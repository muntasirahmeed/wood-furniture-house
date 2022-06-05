import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navber from "./shared/Navber";
function App() {
  return (
    <>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
