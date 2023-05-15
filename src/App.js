import { Footer } from "./companents/Footer/footer";
import { Header } from "./companents/Header/header";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Home">
        <Home />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
