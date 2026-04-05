import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import PowerSection from '@/components/PowerSection/PowerSection';
import VendingSection from '@/components/VendingSection/VendingSection';
import FlavorsSection from '@/components/FlavorsSection/FlavorsSection';
import ExportSection from '@/components/ExportSection/ExportSection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PowerSection />
        <VendingSection />
        <FlavorsSection />
        <ExportSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
