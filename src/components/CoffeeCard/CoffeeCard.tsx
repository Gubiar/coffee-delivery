import { CoffeeProps } from "../../types";
import CoffeeCardForm from "./CoffeeCardForm";
import CoffeeType from "./CoffeeType";

export default function CoffeeCard({ coffee }: { coffee: CoffeeProps }) {
  return (
    <div className="flex flex-col p-4 rounded-xl items-center bg-base-card relative pt-24">
      <img
        className="object-contain absolute top-[-10%]"
        width={120}
        src={coffee.imagePath}
        alt="Café"
      />
      <div className="flex flex-wrap gap-0.5">
        {coffee.types.map((eachCoffee) => (
          <CoffeeType value={eachCoffee} />
        ))}
      </div>

      <h3 className="font-baloo-2 font-bold text-2xl text-coffee text-center">
        {coffee.name}
      </h3>
      <p className="text-center text-base-label text-sm">
        {coffee.description}
      </p>

      <div className="flex items-center justify-between w-full">
        <p className="text-base-text font-black text-2xl flex items-center gap-1">
          <span className="font-normal text-sm">R$</span>
          {coffee.price}
        </p>
        <CoffeeCardForm />
      </div>
    </div>
  );
}
