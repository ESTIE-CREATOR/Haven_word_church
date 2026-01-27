
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Sermons from "./pages/Sermons";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Messages from "./pages/Messages";
import Giving from "./pages/Giving";
import Events from "./pages/Events";
import Testimonies from "./pages/Testimonies";
import { lazy, Suspense } from "react";
const Gallery = lazy(() => import("./pages/Gallery"));
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/gallery" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div></div>}>
              <Gallery />
            </Suspense>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
