import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <Clients />
    </main>
  );
}
