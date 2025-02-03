import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";


function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <BrowserRouter>
        {/* HEADER PART */}
        <Header />

        {/* SECTION PART AND ROUTES */}
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>

        {/* FOOTER PART */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
