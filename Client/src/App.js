import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { words } from "./words";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{words.content}</main>
      <Footer />
    </div>
  );
}

export default App;
