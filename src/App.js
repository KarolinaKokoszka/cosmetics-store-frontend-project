import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MojeKontoPage from "./pages/MojeKontoPage";
import MakijazPage from "./pages/MakijazPage";
import PielegnacjaPage from "./pages/PielegnacjaPage";
import PoradnikiPage from "./pages/PoradnikiPage";
import ArticlePage from "./components/ArticlePage";
import KoszykPage from "./pages/KoszykPage";
import UlubionePage from "./pages/UlubionePage";
import KontaktPage from "./pages/KontaktPage";
import DostawaPage from "./pages/DostawaPage";
import ZwrotyPage from "./pages/ZwrotyPage";
import ONasPage from "./pages/ONasPage";
import PolitykaPrywatnosciPage from "./pages/PolitykaPrywatnosciPage";
import RegulaminPage from "./pages/RegulaminPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
              <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
              <Route path="/register" element={<MainLayout><RegisterPage /></MainLayout>} />
              <Route path="/moje-konto" element={<MainLayout><MojeKontoPage /></MainLayout>} />
              <Route path="/makijaz" element={<MainLayout><MakijazPage /></MainLayout>} />
              <Route path="/pielegnacja" element={<MainLayout><PielegnacjaPage /></MainLayout>} />
              <Route path="/poradniki" element={<MainLayout><PoradnikiPage /></MainLayout>} />
              <Route path="/poradniki/:slug" element={<MainLayout><ArticlePage /></MainLayout>} />
              <Route path="/koszyk" element={<MainLayout><KoszykPage /></MainLayout>} />
              <Route path="/ulubione" element={<MainLayout><UlubionePage /></MainLayout>} />
              <Route path="/kontakt" element={<MainLayout><KontaktPage /></MainLayout>} />
              <Route path="/dostawa" element={<DostawaPage />} />
              <Route path="/zwroty" element={<ZwrotyPage />} />
              <Route path="/o-nas" element={<ONasPage />} />
              <Route path="/polityka" element={<PolitykaPrywatnosciPage />} />
              <Route path="/regulamin" element={<RegulaminPage />} />
              <Route path="/produkt/:id" element={<MainLayout><ProductPage /></MainLayout>} />
              <Route path="/checkout" element={<MainLayout><CheckoutPage /></MainLayout>} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;