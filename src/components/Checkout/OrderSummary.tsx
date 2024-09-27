import OrderSummaryList from "./OrderSummaryList";

export default function OrderSummary() {
  return (
    <div className="rounded-lg rounded-tr-2xl bg-base-card flex flex-col items-start justify-center gap-2 p-6">
      <OrderSummaryList />
      <div className="w-full mt-5">
        <p className="text-base-text flex w-full justify-between items-center">
          <span>Total de Itens</span>
          <span>R$ 29,90</span>
        </p>
        <p className="text-base-text flex w-full justify-between items-center">
          <span>Entrega</span>
          <span>R$ 4,00</span>
        </p>
        <h4 className="text-base-subtitle flex w-full justify-between items-center text-xl font-bold mt-4">
          <span>Total</span>
          <span>R$ 33,90</span>
        </h4>
      </div>
    </div>
  );
}
