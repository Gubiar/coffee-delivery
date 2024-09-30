import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import Hero from "../components/Home/Hero";
import { CoffeeProps, CoffeeType } from "../types";

const data: CoffeeProps[] = [
  {
    id: 1,
    imagePath: "americano.png",
    name: "Americano",
    types: [CoffeeType.TRADITIONAL],
    price: 10.5,
    description:
      "O tradicional café feito com água quente e grãos moídos, resultando em uma bebida leve e aromática.",
  },
  {
    id: 2,
    imagePath: "arabe.png",
    name: "Arabe",
    types: [CoffeeType.SPECIAL],
    price: 12.9,
    description:
      "Um café rico e encorpado, feito a partir de grãos arábica, conhecido por seu sabor suave e notas frutadas.",
  },
  {
    id: 3,
    imagePath: "cafe-com-leite.png",
    name: "Café com Leite",
    types: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    price: 9.5,
    description:
      "Um clássico que combina café forte com leite quente, criando uma bebida cremosa e reconfortante.",
  },
  {
    id: 4,
    imagePath: "cafe-gelado.png",
    name: "Café Gelado",
    types: [CoffeeType.TRADITIONAL, CoffeeType.COLD],
    price: 11.0,
    description:
      "Uma refrescante bebida de café servida fria, perfeita para os dias quentes, muitas vezes adoçada e com gelo.",
  },
  {
    id: 5,
    imagePath: "capuccino.png",
    name: "Capuccino",
    types: [CoffeeType.TRADITIONAL, CoffeeType.WITH_MILK],
    price: 13.5,
    description:
      "Uma mistura equilibrada de café expresso, leite vaporizado e espuma de leite, resultando em uma textura aveludada.",
  },
  {
    id: 6,
    imagePath: "chocolate-quente.png",
    name: "Chocolate Quente",
    types: [CoffeeType.SPECIAL, CoffeeType.WITH_MILK],
    price: 8.5,
    description:
      "Uma deliciosa bebida quente feita com chocolate derretido e leite, trazendo um sabor rico e reconfortante.",
  },
  {
    id: 7,
    imagePath: "cubano.png",
    name: "Cubano",
    types: [CoffeeType.TRADITIONAL, CoffeeType.ALCOHOLIC],
    price: 14.0,
    description:
      "Um café expresso forte e doce, frequentemente servido com rum e açúcar, oferecendo uma experiência única.",
  },
  {
    id: 8,
    imagePath: "expresso-cremoso.png",
    name: "Expresso Cremoso",
    types: [CoffeeType.SPECIAL, CoffeeType.WITH_MILK],
    price: 12.0,
    description:
      "Um café expresso com uma camada rica de creme, proporcionando um sabor intenso e uma textura luxuosa.",
  },
  {
    id: 9,
    imagePath: "expresso.png",
    name: "Expresso",
    types: [CoffeeType.TRADITIONAL],
    price: 9.0,
    description:
      "Um café concentrado feito ao forçar água quente através de grãos moídos finamente, resultando em uma bebida robusta.",
  },
  {
    id: 10,
    imagePath: "havaiano.png",
    name: "Havaiano",
    types: [CoffeeType.SPECIAL],
    price: 15.0,
    description:
      "Um café suave e aromático originário do Havai, famoso por suas notas frutadas e sabor adocicado.",
  },
  {
    id: 11,
    imagePath: "irlandes.png",
    name: "Irlandes",
    types: [CoffeeType.ALCOHOLIC, CoffeeType.SPECIAL],
    price: 16.9,
    description:
      "Uma bebida quente de café misturada com uísque irlandês e coberta com creme, perfeita para aquecer as noites frias.",
  },
  {
    id: 12,
    imagePath: "latte.png",
    name: "Latte",
    types: [CoffeeType.WITH_MILK, CoffeeType.SPECIAL],
    price: 11.5,
    description:
      "Uma combinação de café expresso e leite vaporizado, com uma camada fina de espuma no topo, ideal para quem gosta de leite.",
  },
  {
    id: 13,
    imagePath: "macchiato.png",
    name: "Macchiato",
    types: [CoffeeType.WITH_MILK, CoffeeType.TRADITIONAL],
    price: 10.0,
    description:
      "Um expresso 'manchado' com uma pequena quantidade de leite, oferecendo um sabor forte com um toque de cremosidade.",
  },
  {
    id: 14,
    imagePath: "mochaccino.png",
    name: "Mochaccino",
    types: [CoffeeType.WITH_MILK, CoffeeType.SPECIAL],
    price: 14.5,
    description:
      "Uma mistura indulgente de café expresso, leite vaporizado e chocolate, frequentemente coberta com chantilly.",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto p-4 py-8 ">
        <h1 className="text-4xl font-bold font-baloo-2 text-base-title mb-12">
          Nossos Cafés
        </h1>
        <div className="grid grid-cols-1 gap-3 gap-y-7 sm:gap-6 sm:gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((value) => (
            <CoffeeCard key={value.id} coffee={value} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
