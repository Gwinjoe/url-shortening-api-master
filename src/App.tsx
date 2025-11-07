import Features from "./sections/Features.tsx";
import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import Boost from "./sections/Boost.tsx";
import Footer from "./sections/Footer.tsx";

function App() {
  return (
    <main className="w-screen max-sm:text-md max-sm:leading-6 max-w-[1440px] font-poppins">
      <Header />
      <section className="padding-t  pb-30">
        <Hero />
      </section>
      <section className="relative w-full padding-x padding-y bg-gray-200/80">
        <Features />
      </section>
      <section className="relative w-full bg-purple-950">
        <Boost />
      </section>
      <Footer />
    </main>
  );
}

export default App;
