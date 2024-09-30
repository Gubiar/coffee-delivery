import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import CoffeeContext from "../../context/CoffeeContext";
import { CoffeeProps } from "../../types";

export default function CoffeeCardResume({ coffee }: { coffee: CoffeeProps }) {
  const { dispatch } = useContext(CoffeeContext);

  // Handle quantity change
  const handleQuantityChange = (change: number) => {
    const newQuantity = coffee.quantity! + change;
    if (newQuantity >= 1) {
      dispatch({
        type: "UPDATE_COFFEE_QUANTITY",
        payload: { id: coffee.id, quantity: newQuantity },
      });
    }
  };

  // Handle removing coffee
  const handleRemoveCoffee = () => {
    dispatch({ type: "REMOVE_COFFEE", payload: coffee.id });
  };

  return (
    <div className="p-2 w-full rounded-sm flex flex-wrap justify-between items-center">
      <div className="flex gap-3 items-center">
        <img
          className="w-16 object-contain"
          src={coffee.imagePath}
          alt="Imagem do café"
        />

        <div>
          <p className="text-coffee mb-4">{coffee.name}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex w-fit bg-base-button rounded-lg">
              <button
                onClick={() => handleQuantityChange(-1)}
                type="button"
                className="px-2"
              >
                <Minus className="fill-purple" />
              </button>
              <input
                className="w-8 flex items-center justify-center p-2 bg-base-button text-center"
                type="text"
                value={coffee.quantity!}
                readOnly
              />
              <button
                onClick={() => handleQuantityChange(1)}
                type="button"
                className="px-2"
              >
                <Plus className="fill-purple" />
              </button>
            </div>
            <button
              onClick={handleRemoveCoffee}
              className="flex items-center gap-2 text-base-text font-medium bg-base-button px-4 py-2 rounded-lg"
            >
              <Trash className="fill-purple" /> Remover
            </button>
          </div>
        </div>
      </div>

      <p className="flex items-center gap-2 text-xl">
        <span className="text-md">R$</span>{" "}
        {coffee.price.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}
