import Cafe from "../../assets/americano.png";
import CoffeeCardForm from "./CoffeeCardForm";
import CoffeeType from "./CoffeeType";

export default function CoffeeCard() {
  return (
    <div className="flex flex-col p-4 rounded-xl items-center bg-base-card relative pt-24">
      <img
        className="object-contain absolute top-[-10%]"
        width={120}
        src={Cafe}
        alt="Café"
      />
      <CoffeeType value="Tradicional" />
      <h3 className="font-baloo-2 font-bold text-2xl text-coffee">
        Expresso Tradicional
      </h3>
      <p className="text-center text-base-label">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="flex items-center justify-between w-full">
        <p className="text-base-text font-black text-2xl">
          <span className="font-normal text-sm">R$</span> 9,90
        </p>
        <CoffeeCardForm />
      </div>
    </div>
  );
}
