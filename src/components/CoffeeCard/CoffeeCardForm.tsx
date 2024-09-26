import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";

export default function CoffeeCardForm() {
  const [count, setCount] = useState(0);

  return (
    <form action="" className="w-fit flex items-center gap-2 my-2">
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
        type="submit"
        className="rounded-md p-3 bg-purple hover:bg-purple-dark transition-all duration-300"
      >
        <ShoppingCart size={20} className="fill-white" />
      </button>
    </form>
  );
}
