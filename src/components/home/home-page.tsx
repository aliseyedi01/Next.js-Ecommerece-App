import BannerCarousel from "./banner-carousel";

export default function HomePage() {
  return (
    <div className="-z-10 flex h-screen bg-blue-400 p-24 md:-translate-y-20">
      <BannerCarousel />
    </div>
  );
}
