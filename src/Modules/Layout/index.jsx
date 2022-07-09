/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import { Header } from "../../Components/Header";

function Layout({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
}

export { Layout };
