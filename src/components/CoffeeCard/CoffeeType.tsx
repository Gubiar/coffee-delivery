export default function CoffeeType({ value }: { value: string }) {
  return (
    <span className="rounded-xl bg-yellow-light text-yellow flex px-2 w-fit font-bold my-3 text-sm">
      {value}
    </span>
  );
}
