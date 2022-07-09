/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from "react-router-dom";
import Home from "./Modules/Home";
import Details from "./Modules/Details";
import { Layout } from "./Modules/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Layout>
  );
}

export default App;
