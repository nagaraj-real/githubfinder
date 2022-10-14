import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Alert from "./components/layout/Alert";
import AlertContextProvider from "./context/AlertContext";
import User from "./components/layout/User";
import GitHubProvider from "./context/GitHubContext";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12 mb-auto">
          <AlertContextProvider>
            <GitHubProvider>
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/User/:login" element={<User />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            </GitHubProvider>
          </AlertContextProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
