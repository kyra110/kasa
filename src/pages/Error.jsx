
import Error404 from "../components/Error404";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Error = () => {
  return (
      <div className="error">
        <Header/>
        <Error404/>
        <Footer/>
      </div>
  );
};

export default Error;