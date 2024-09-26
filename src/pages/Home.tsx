import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <div className="bg-coffee-light w-full bg-hero-somber bg-cover bg-center bg-no-repeat">
        <Header />
        <Hero />
      </div>
      <main className="container mx-auto p-4 py-8 ">
        <h1 className="text-4xl font-bold font-baloo-2 text-base-title mb-12">
          Nossos Cafés
        </h1>
        <div className="grid grid-cols-2 gap-6 gap-y-14 sm:grid-cols-4">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </main>
    </>
  );
}

export default Home;
