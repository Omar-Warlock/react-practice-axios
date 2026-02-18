import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Create from "./components/Create";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses/:id" element={<Details />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </>
  );
}

export default App;
