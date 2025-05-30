import Reviews from '@/components/Reviews';
import dynamic from 'next/dynamic';

// Import components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const ImageGallery = dynamic(() => import('@/components/ImageGallery'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <Hero />
      <Services />
      <ImageGallery />
      <Reviews />
      <Footer />
    </main>
  );
}
