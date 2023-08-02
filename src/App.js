import "./App.css";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import OurService from "./components/OurService/OurService";
import Weare from "./components/Weare/Weare";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Weare />
      <OurService />
      <News />
      <Footer />
    </div>
  );
}

export default App;
