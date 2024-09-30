import { Fragment, useContext } from "react";
import CoffeeCardResume from "./CoffeeCardResume";
import CoffeeContext from "../../context/CoffeeContext";
import { Coffee } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const { state } = useContext(CoffeeContext);
  const { selectedCoffees, totalAmount } = state;
  const navigate = useNavigate();

  const deliveryFee = 4.0; //fixed
  const orderTotal = totalAmount + deliveryFee;

  const divider = (
    <div className="h-[1px] bg-base-button w-3/4 mx-auto my-2"></div>
  );

  if (selectedCoffees.length === 0) {
    const goToHome = () => {
      navigate("/");
    };

    return (
      <div className="rounded-lg rounded-tr-2xl bg-base-card flex flex-col items-start justify-center gap-2 p-6">
        <h1 className="text-lg font-baloo-2 font-bold">
          Seu carrinho está vazio
        </h1>
        <button
          className="flex gap-2 rounded-lg text-white bg-coffee px-4 py-2 font-baloo-2 font-bold"
          onClick={goToHome}
        >
          Escolher café
          <Coffee className="fill-white" size={20} weight="regular" />
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg rounded-tr-2xl bg-base-card flex flex-col items-start justify-center gap-2 p-6">
      {selectedCoffees.map((coffee) => (
        <Fragment key={coffee.id}>
          <CoffeeCardResume coffee={coffee} />
          {divider}
        </Fragment>
      ))}

      <div className="w-full mt-5">
        <p className="text-base-text flex w-full justify-between items-center">
          <span>Total de Itens</span>
          <span>R$ {totalAmount.toFixed(2)}</span>
        </p>
        <p className="text-base-text flex w-full justify-between items-center">
          <span>Entrega</span>
          <span>R$ {deliveryFee.toFixed(2)}</span>
        </p>
        <h4 className="text-base-subtitle flex w-full justify-between items-center text-xl font-bold mt-4">
          <span>Total</span>
          <span>R$ {orderTotal.toFixed(2)}</span>
        </h4>
      </div>
    </div>
  );
}
