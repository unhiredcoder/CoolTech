import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Navbar } from "./components/navbar/navbar";
import Footer from "./components/Footer";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
