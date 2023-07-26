"use client";
import { fetcher } from "@/utils/client";
import useSWR, { useSWRConfig } from "swr";
import { CryptoconLogo } from "cryptocons";
import { companyMapper, iconMapper } from "@/utils/utilities";
import Up from "@/assets/arrow-up.svg";
import Down from "@/assets/arrow-down.svg";
import Chevron from "@/assets/chevron.svg";
import Image from "next/image";
import { Loader } from "../Shared/Spinner/Spinner";
import format from "date-fns/format";
import H2 from "../Shared/Header/Header";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";

function PriceComponent({ data, isLoading, isValidating }) {
  if (isLoading || isValidating) return <Loader />;

  if (data.return > 0) {
    return (
      <div className="flex flex-row align-middle items-start gap-2">
        <span className="text-secondary-green-dark-2 text-4">
          {data?.return}
        </span>
        <Image src={Up} alt="up" />
      </div>
    );
  }

  return (
    <div className="flex flex-row align-middle items-start gap-2">
      <span className="text-secondary-red-dark-2 text-4 ">{data?.return}</span>
      <Image src={Down} alt="down" />
    </div>
  );
}

function Symbol_({ symbol }) {
  const symbols = useSWR("/return_" + symbol, fetcher, {
    revalidateOnFocus: false,
  });
  return (
    <div>
      <div className="bg-gray-dark-11 p-2 rounded-lg flex gap-2 justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-gray-dark-13 rounded-lg p-4 border-gray-dark-11">
            <CryptoconLogo icon={iconMapper(symbol)} />
          </div>
          <div className="flex flex-col flex-grow">
            <span className="text-5 font-semibold">{symbol}</span>
            <span className="text-2 text-gray-dark-1">
              {companyMapper(symbol)}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-end">
          <PriceComponent {...symbols} />
          <span
            className="text-1 text-gray-dark-3"
            hidden={symbols.isLoading || symbols.isValidating}
          >
            Last Update: {format(new Date(), "p")}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Returns() {
  const {
    data: { top_10 = [] } = {},
    error,
    isLoading,
  } = useSWR("/top_10", fetcher, {
    revalidateOnFocus: false,
  });

  const { mutate } = useSWRConfig();

  const handleReload = () => top_10.forEach((r) => mutate(`/return_${r}`));

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <div className="flex justify-between">
        <H2>Returns</H2>
        <span
          className="underline text-3 text-gray-dark-3 cursor-pointer"
          onClick={handleReload}
        >
          Reload
        </span>
      </div>
      <div className="gap-4 flex-col grid md:grid-cols-2 sm:grid-cols-1">
        {top_10.map((s) => (
          <Symbol_ symbol={s} key={s} />
        ))}
      </div>
      <div className="flex justify-center pt-10 cursor-not-allowed gap-2">
        <span className="text-3">View More</span>
        <Image
          src={Chevron}
          alt="chevron"
          width={"auto"}
          className="rotate-90 text-gray-dark-3"
        ></Image>
      </div>
    </div>
  );
}

export default Returns;
