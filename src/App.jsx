import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProject from "./pages/ViewProject";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { ModeToggle } from "./components/toggle-mode";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/SubComponents/Contact";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <ModeToggle />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/project/:id" element={<ViewProject />} />
          </Routes>
          <Footer />
          <Toaster position="bottom-center" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
