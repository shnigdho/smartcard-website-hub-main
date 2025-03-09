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
import SmartCards from "./pages/products/SmartCards";
import RfidSolutions from "./pages/products/RfidSolutions";
import MembershipCards from "./pages/products/MembershipCards";
import ScratchCards from "./pages/products/ScratchCards";
import AccessControl from "./pages/products/AccessControl";

// Service Pages
import CardPersonalization from "./pages/services/CardPersonalization";
import SystemIntegration from "./pages/services/SystemIntegration";
import Consulting from "./pages/services/Consulting";
import Maintenance from "./pages/services/Maintenance";
import CustomSolutions from "./pages/services/CustomSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/smart-cards" element={<SmartCards />} />
          <Route path="/products/rfid-solutions" element={<RfidSolutions />} />
          <Route path="/products/membership-cards" element={<MembershipCards />} />
          <Route path="/products/scratch-cards" element={<ScratchCards />} />
          <Route path="/products/access-control" element={<AccessControl />} />
          
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
