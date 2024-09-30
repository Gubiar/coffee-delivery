import { useContext } from "react";
import { CoffeeProps } from "../../types";
import CoffeeType from "./CoffeeType";
import CoffeeContext from "../../context/CoffeeContext";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { dispatch } = useContext(CoffeeContext);
  const [count, setCount] = useState(0);

  const handleAddCoffee = () => {
    if (count !== 0)
      dispatch({
        type: "ADD_COFFEE",
        payload: { ...coffee, quantity: count },
      });
  };

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
          {coffee.price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <div className="w-fit flex items-center gap-2 my-2">
          <button
            type="button"
            onClick={() => setCount((prev) => (prev == 0 ? 0 : prev - 1))}
          >
            <Minus />
          </button>
          <input
            className="w-7 flex items-center justify-center bg-base-card outline-1 outline-base-label h-7 font-bold text-center"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            value={count}
          />
          <button
            type="button"
            onClick={() => setCount((prev) => (prev == 99 ? 99 : prev + 1))}
          >
            <Plus />
          </button>

          <button
            type="button"
            onClick={handleAddCoffee}
            disabled={count === 0}
            className="disabled:cursor-not-allowed rounded-md p-3 bg-purple hover:bg-purple-dark transition-all duration-300"
          >
            <ShoppingCart size={20} className="fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
