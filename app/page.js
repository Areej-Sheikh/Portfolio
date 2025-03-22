import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
    </main>
  );
}
