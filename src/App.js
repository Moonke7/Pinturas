import "./styles/App.css";
import Pinturas from "./Components/Pinturas";
import Footer from "./Components/Footer";
import { MainLayout } from "./MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="container">
      <Pinturas />
      <Footer />
    </div>
    </MainLayout>
  );
}

export default App;
