import CoffeeCardResume from "./CoffeeCardResume";

export default function OrderSummaryList() {
  const divider = (
    <div className="h-[1px] bg-base-button w-3/4 mx-auto my-2"></div>
  );

  return (
    <>
      <CoffeeCardResume />
      {divider}
      <CoffeeCardResume />
      {divider}
      <CoffeeCardResume />
      {divider}
      <CoffeeCardResume />
    </>
  );
}
