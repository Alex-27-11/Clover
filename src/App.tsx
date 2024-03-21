import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CloverResearch from "./pages/CloverResearch/CloverResearch";
import MainPage from "./pages/MainPage/MainPage";
import Cases from "./pages/Cases/Cases";
import NotFound from "./pages/NotFound/NotFound";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CloverResearch />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
