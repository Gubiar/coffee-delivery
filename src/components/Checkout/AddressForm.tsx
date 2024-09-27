import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMask from "react-input-mask";
import { MapPinLine } from "@phosphor-icons/react";
import { tailspin } from "ldrs";

const schema = z.object({
  cep: z.string().min(9, "CEP inválido").max(9, "CEP inválido"),
  rua: z.string().min(1, "Rua é obrigatória"),
  numero: z.string().min(1, "Número é obrigatório"),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  uf: z.string().min(2, "UF inválido").max(2, "UF inválido"),
});

type FormData = z.infer<typeof schema>;

export default function AddressForm() {
  const [cepError, setCepError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const fetchAddress = async (cep: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      if (!response.ok) throw new Error("CEP não encontrado");
      const data = await response.json();
      setValue("rua", data.street);
      setValue("bairro", data.neighborhood);
      setValue("cidade", data.city);
      setValue("uf", data.state);
      setCepError("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setCepError("CEP inválido ou não encontrado");
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleCepBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (cep.length === 8) {
      fetchAddress(cep);
    } else {
      setCepError("CEP inválido");
    }
  };

  tailspin.register();

  return (
    <>
      <div
        className={`${
          isLoading ? "flex" : "hidden"
        } z-10 fixed w-full h-full top-0 left-0`}
      >
        <div
          className={`${
            isLoading ? "flex" : "hidden"
          } w-16 h-16 rounded-md bg-coffee  items-center justify-center p-4 absolute inset-0 m-auto z-20 shadow-lg`}
        >
          <l-tailspin
            size="40"
            stroke="5"
            speed="0.9"
            color="var(--coffee-light)"
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 px-8 py-4 bg-base-card my-4 rounded-lg"
      >
        <header className="flex gap-4 p-4 items-center">
          <MapPinLine size={30} className="fill-yellow-dark" weight="regular" />
          <div className="flex flex-col justify-center">
            <h3 className="text-coffee font-baloo-2 font-bold text-xl">
              Endereço de Entrega
            </h3>
            <p className="text-md">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-1">
          <label className="text-base-label text-sm" htmlFor="cep">
            CEP
          </label>
          <InputMask
            mask="99999-999"
            {...register("cep")}
            className="w-fit bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
            onBlur={handleCepBlur}
          />
          {cepError && <p className="text-base-text-error">{cepError}</p>}
          {errors.cep && (
            <p className="text-base-text-error">{errors.cep.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base-label text-sm" htmlFor="rua">
            Rua
          </label>
          <input
            type="text"
            {...register("rua")}
            className="bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
          />
          {errors.rua && (
            <p className="text-base-text-error">{errors.rua.message}</p>
          )}
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="flex flex-col gap-1 col-span-4">
            <label className="text-base-label text-sm" htmlFor="numero">
              Número
            </label>
            <input
              type="text"
              {...register("numero")}
              className="bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
            />
            {errors.numero && (
              <p className="text-base-text-error">{errors.numero.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 col-span-8">
            <label className="text-base-label text-sm" htmlFor="complemento">
              Complemento (Opcional)
            </label>
            <input
              type="text"
              {...register("complemento")}
              className="bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="flex flex-col gap-1 col-span-4">
            <label className="text-base-label text-sm" htmlFor="bairro">
              Bairro
            </label>
            <input
              type="text"
              {...register("bairro")}
              className="bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
            />
            {errors.bairro && (
              <p className="text-base-text-error">{errors.bairro.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 col-span-5">
            <label className="text-base-label text-sm" htmlFor="cidade">
              Cidade
            </label>
            <input
              type="text"
              {...register("cidade")}
              className="bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
            />
            {errors.cidade && (
              <p className="text-base-text-error">{errors.cidade.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 col-span-3">
            <label className="text-base-label text-sm" htmlFor="uf">
              UF
            </label>
            <select
              {...register("uf")}
              className="bg-base-input placeholder:text-base-label flex p-2 border border-base-card rounded-md"
            >
              <option value="">Selecione</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
            {errors.uf && (
              <p className="text-base-text-error">{errors.uf.message}</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
