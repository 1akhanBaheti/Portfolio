import { Header } from "@/components/header";
import { HeroSection } from "@/components/homepage";

export default function HomePage() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}
