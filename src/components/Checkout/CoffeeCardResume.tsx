import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useState } from "react";

export default function CoffeeCardResume() {
  const [count, setCount] = useState(1);

  return (
    <div className="p-2 w-full rounded-sm flex flex-wrap justify-between items-center">
      <div className="flex gap-3 items-center">
        <img
          className="w-16 object-contain"
          src="/americano.png"
          alt="Imagem do café"
        />

        <div>
          <p className="text-coffee mb-4">Expresso tradicional</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex w-fit bg-base-button rounded-lg">
              <button
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
                type="button"
                className="px-2"
              >
                <Minus className="fill-purple" />
              </button>
              <input
                className="w-8 flex items-center justify-center p-2 bg-base-button"
                type="text"
                value={count}
              />
              <button
                onClick={() => setCount((prev) => (prev < 100 ? prev + 1 : 99))}
                type="button"
                className="px-2"
              >
                <Plus className="fill-purple" />
              </button>
            </div>
            <button className="flex items-center gap-2 text-base-text font-medium bg-base-button px-4 py-2 rounded-lg">
              <Trash className="fill-purple" /> Remover
            </button>
          </div>
        </div>
      </div>

      <p className="flex items-center gap-2 text-xl">
        <span className="text-md">R$</span> 9.90
      </p>
    </div>
  );
}
