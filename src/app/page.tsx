import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/AboutSection";
import WorksPage from "@/components/home/WorksSection";
import PostsSection from "@/components/home/PostsSection";
import Footer from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <About/>
      <WorksPage/>
      <PostsSection/>
    </main>
  );
}
