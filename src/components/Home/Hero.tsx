import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import HeroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="bg-coffee-light w-full bg-cover bg-center bg-no-repeat">
      <main className="container mx-auto p-4 py-12 grid grid-cols-10 grid-rows-1 gap-10 gap-y-14">
        <div className="col-span-10 sm:col-span-5">
          <h1 className="text-6xl font-bold font-baloo-2 text-base-title">
            Encontre <span className="text-coffee">o café perfeito</span> para
            qualquer hora do dia
          </h1>
          <p className="text-base-subtitle mt-4 mb-10 text-xl">
            Com o Coffee Delivery{" "}
            <span className="font-bold">
              você recebe seu café onde estiver, a qualquer hora
            </span>
          </p>
          <ul className="grid grid-cols-2 grid-rows-2 gap-4 gap-y-6">
            <li className="flex items-center justify-start gap-4">
              <div className="rounded-full p-2 bg-yellow-dark">
                <ShoppingCart className="fill-white" weight="fill" />
              </div>
              <p className="text-base-text font-bold">
                Compra simples e segura
              </p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <div className="rounded-full p-2 bg-base-text">
                <Package className="fill-white" weight="fill" />
              </div>
              <p className="text-base-text font-bold">
                Embalagem mantém o café intacto
              </p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <div className="rounded-full p-2 bg-yellow">
                <Timer className="fill-white" weight="fill" />
              </div>
              <p className="text-base-text font-bold">
                Entrega rápida e rastreada
              </p>
            </li>
            <li className="flex items-center justify-start gap-4">
              <div className="rounded-full p-2 bg-purple">
                <Coffee className="fill-white" weight="fill" />
              </div>
              <p className="text-base-text font-bold">
                O café chega fresquinho até você
              </p>
            </li>
          </ul>
        </div>
        <div className="col-span-5 col-start-6 items-center justify-center hidden sm:flex">
          <img src={HeroImage} alt="Imagem do Hero" />
        </div>
      </main>
    </div>
  );
}
