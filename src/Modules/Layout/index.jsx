import { Header } from '../../Components/Header';


const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      { children }
    </div>
  );
};

export {Layout};
