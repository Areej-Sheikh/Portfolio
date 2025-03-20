import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" >
      <Navbar/>
      <Hero/>
    </main>
  );
}
