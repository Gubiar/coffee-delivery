import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="w-full h-28 p-4 container mx-auto flex justify-between items-center">
      <a href="/">
        <img className="w-28" src={Logo} alt="Logo Coffee Delirevy" />
      </a>

      <ul className="flex gap-5">
        <li>
          <button
            type="button"
            className="rounded-md gap-2 p-4 py-2 flex bg-coffee hover:bg-yellow-dark transition-all duration-300 group items-center"
          >
            <MapPin
              className="group-hover:fill-white fill-coffee-light"
              size={28}
              weight="fill"
            />

            <span className="font-bold text-coffee-light group-hover:text-white font-roboto">
              Xique-Xique, BA
            </span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="rounded-md p-4 py-2 flex bg-yellow-light hover:bg-yellow transition-all duration-300 group items-center gap-2"
          >
            <ShoppingCart
              className="group-hover:fill-white"
              size={28}
              weight="fill"
              color="var(--yellow-dark)"
            />
          </button>
        </li>
      </ul>
    </header>
  );
}
