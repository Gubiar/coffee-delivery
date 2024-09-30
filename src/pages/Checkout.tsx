import { useContext } from "react";
import AddressForm from "../components/Checkout/AddressForm";
import OrderSummary from "../components/Checkout/OrderSummary";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import CoffeeContext from "../context/CoffeeContext";

export default function Checkout() {
  const { selectedCoffees } = useContext(CoffeeContext).state;

  return (
    <main className="container mx-auto p-4 py-8 grid grid-cols-12 gap-8 relative pb-20 xl:static xl:pb-4">
      <div className="col-span-12 order-last xl:order-first xl:col-span-6 2xl:col-span-8">
        <h1 className="text-coffee font-baloo-2 font-bold text-3xl">
          Complete seu pedido
        </h1>
        <AddressForm />
        <PaymentMethod />
      </div>
      <div className="col-span-12 order-first xl:order-last xl:col-span-6 2xl:col-span-4">
        <h1 className="text-coffee font-baloo-2 font-bold text-3xl mb-4">
          Cafés Selecionados
        </h1>
        <OrderSummary />
        <div className="container absolute bottom-4 left-0 px-4 xl:static xl:p-0">
          <button
            disabled={selectedCoffees.length === 0}
            className="disabled:cursor-not-allowed mt-6 bg-yellow hover:bg-yellow-dark text-white font-baloo-2 font-bold text-xl transition-all duration-300 w-full h-14 rounded-lg"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </main>
  );
}
