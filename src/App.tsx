import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Product Pages
import ScratchCards from "./pages/products/ScratchCards"; 
import SimCards from "./pages/products/SimCards";
import SmartCards from "./pages/products/SmartCards";
import PaymentCards from "./pages/products/PaymentCards";
import OtherCards from "./pages/products/OtherCards";

// Service Pages
import CardPersonalization from "./pages/services/CardPersonalization";
import SystemIntegration from "./pages/services/SystemIntegration";
import Consulting from "./pages/services/Consulting";
import Maintenance from "./pages/services/Maintenance";
import CustomSolutions from "./pages/services/CustomSolutions";

// Import the Navbar component
import Navbar from "./components/Navbar"; // Adjust the path as needed

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Add the Navbar here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/scratch-cards" element={<ScratchCards />} />
          <Route path="/products/sim-cards" element={<SimCards />} />
          <Route path="/products/smart-cards" element={<SmartCards />} />
          <Route path="/products/payment-cards" element={<PaymentCards />} />
          <Route path="/products/other-cards" element={<OtherCards />} />
          
          {/* Service Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/card-personalization" element={<CardPersonalization />} />
          <Route path="/services/system-integration" element={<SystemIntegration />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/custom-solutions" element={<CustomSolutions />} />
          
          {/* Other Routes */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;