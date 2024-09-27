import {
  CreditCard,
  CurrencyDollarSimple,
  IconProps,
  Money,
  PixLogo,
} from "@phosphor-icons/react";
import { ReactNode, useState } from "react";
import { PaymentTypes } from "../../types";

export default function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentTypes | null>(
    null
  );

  const handlePaymentSelect = (paymentType: PaymentTypes) => {
    setSelectedPayment((prev) => (prev === paymentType ? null : paymentType));
  };

  const renderIcon = (paymentType: PaymentTypes): ReactNode => {
    const iconProps: IconProps = {
      size: 25,
      weight: "regular",
      className: `${
        selectedPayment === paymentType
          ? "fill-white"
          : "fill-purple group-hover:fill-white"
      } transition duration-300`,
    };

    switch (paymentType) {
      case PaymentTypes.CreditCard:
      case PaymentTypes.DebitCard:
        return <CreditCard {...iconProps} />;
      case PaymentTypes.Pix:
        return <PixLogo {...iconProps} />;
      case PaymentTypes.Cash:
        return <Money {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 px-8 py-4 bg-base-card my-4 rounded-lg">
      <header className="flex gap-4 p-4 items-center">
        <CurrencyDollarSimple
          size={30}
          className="fill-purple"
          weight="regular"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-coffee font-baloo-2 font-bold text-xl">
            Pagamento
          </h3>
          <p className="text-md">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Object.values(PaymentTypes).map((paymentType) => (
          <button
            key={paymentType}
            onClick={() => handlePaymentSelect(paymentType)}
            className={`p-4 font-bold rounded-lg transition duration-300 flex items-center gap-4 group ${
              selectedPayment === paymentType
                ? "bg-purple text-white hover:bg-purple-dark"
                : "bg-purple-light text-base-text hover:bg-purple hover:text-white"
            }`}
          >
            {renderIcon(paymentType)}
            {paymentType}
          </button>
        ))}
      </div>
    </div>
  );
}
