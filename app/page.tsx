import { ContactMe, HeroSection } from "@/components/homepage";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden hide-scrollbar">
      <HeroSection />
      <ContactMe />
    </div>
  );
}
