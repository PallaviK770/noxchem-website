import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ScrollToHash from "./components/ScrollToHash";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {

    return (
      

           < >

          <ScrollToTop />

          <ScrollToHash />


        <Routes>

            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />
<Route
  path="/products"
  element={
    <MainLayout>
      <ProductsPage />
    </MainLayout>
  }
/>
            <Route
                path="/career"
                element={
                    <MainLayout>
                        <CareerPage />
                    </MainLayout>
                }
            />

             <Route
                path="/applications"
                element={
                    <MainLayout>
                        <ApplicationsPage />
                    </MainLayout>
                }
            />

<Route
  path="/about"
  element={
    <MainLayout>
      <AboutPage />
    </MainLayout>
  }
/>

        <Route
             path="/contact"
             element={
        <MainLayout>
            <ContactPage />
        </MainLayout>
    }
/>

<Route
  path="/services"
  element={
    <MainLayout>
      <ServicesPage />
    </MainLayout>
  }
/>

        </Routes>

      </>

    );

}

export default App;