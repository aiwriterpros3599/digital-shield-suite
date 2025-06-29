import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { SignupForm } from "@/components/auth/SignupForm";
import { HelpArticlePage } from "@/components/help/HelpArticlePage";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Humanizer from "./pages/Humanizer";
import Verification from "./pages/Verification";
import Scanner from "./pages/Scanner";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogAdmin from "./pages/BlogAdmin";
import AiTextHumanizerSales from "./pages/AiTextHumanizerSales";
import ImageVerificationSales from "./pages/ImageVerificationSales";
import ContentTheftDetectionSales from "./pages/ContentTheftDetectionSales";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import HelpSearch from "./pages/HelpSearch";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Dmca from "./pages/Dmca";
import DmcaTakedown from "./pages/DmcaTakedown";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/tools/ai-text-humanizer" element={<AiTextHumanizerSales />} />
            <Route path="/tools/image-verification" element={<ImageVerificationSales />} />
            <Route path="/tools/content-theft-detection" element={<ContentTheftDetectionSales />} />
            <Route path="/dmca-takedown" element={<DmcaTakedown />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/help/search" element={<HelpSearch />} />
            <Route path="/help/article/:slug" element={<HelpArticlePage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/dmca" element={<Dmca />} />
            <Route path="/dashboard" element={
              <AuthGuard>
                <Index />
              </AuthGuard>
            } />
            <Route path="/humanizer" element={
              <AuthGuard>
                <Humanizer />
              </AuthGuard>
            } />
            <Route path="/verification" element={
              <AuthGuard>
                <Verification />
              </AuthGuard>
            } />
            <Route path="/scanner" element={
              <AuthGuard>
                <Scanner />
              </AuthGuard>
            } />
            <Route path="/blog-admin" element={
              <AuthGuard>
                <BlogAdmin />
              </AuthGuard>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
