import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/AboutSection";
import WorksPage from "@/components/home/WorksSection";
import PostsSection from "@/components/home/PostsSection";

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
