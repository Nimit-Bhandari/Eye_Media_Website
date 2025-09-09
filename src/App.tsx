import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { ThemeProvider } from "@/components/theme-provider"
import Works from './components/Works';
import Faq from './components/faq';
import Growth from './components/Growth';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
// In src/main.tsx or src/App.tsx
import './index.css'

function App() {
  return (
    // <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="font-urban flex-1 container mx-auto">
        <Hero />
        <Services />
        <Portfolio />
        <Works />
        <Testimonials />
        {/* <Growth /> */}
        <Faq />
        <Contact />
      </main>
      <FloatingWhatsApp phoneNumber='9369608160' accountName='Eye Media' avatar='assets/images/logo2.jpg'/>
      <Footer />
    </div>
    // </ThemeProvider>
  );
}

export default App;

