"use client";
import { sendRequest } from "@/utils/client";
import { iconMapper, jsDate } from "@/utils/utilities";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { CryptoconLogo } from "cryptocons";
import { Loader } from "../Shared/Spinner/Spinner";
import MX from "@/assets/mx.svg";
import Image from "next/image";
import formatDistance from "date-fns/formatDistance";
import H2 from "../Shared/Header/Header";

const TradesTable = ({ trades }) => {
  if (!trades.length) {
    return (
      <span className="text-gray-dark-3">There are no transactions yet</span>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {trades.map((trade, key) => (
        <div key={key} className="flex justify-between items-center gap-2">
          <div className="flex gap-2">
            <div className="bg-gray-dark-12 w-12 h-12 flex justify-center items-center rounded-lg">
              <span>
                <CryptoconLogo icon={iconMapper(trade.currency)} />
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-5 font-bold">{trade.currency}</span>
              <span className="text-2 text-gray-dark-1">Buy</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-5">+{trade.price}</span>
            <span className="text-1 text-gray">
              {formatDistance(jsDate(trade.date), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export function PlaceTrade() {
  const [trades, setTrades] = useState([]);

  const [value, setValue] = useState();

  const { isMutating, data, trigger } = useSWRMutation(
    "/place_trade",
    sendRequest,
    {
      onSuccess: (data) => {
        if (data.return === "Trade placed")
          setTrades([{ ...data, currency: value }, ...trades]);
      },
    }
  );

  const handleSubmit = async () => {
    try {
      await trigger({ symbol: value });
    } catch (err) {
      alert("Error calling the backend");
    }
  };

  const handleChange = (e) => setValue(e.target.value.toUpperCase());

  return (
    <div>
      <H2>Place trade</H2>

      <div className="flex flex-col gap-3">
        <div className="flex bg-gray-dark-13 rounded-lg p-1 gap-2 text-center">
          <div className="p-2 rounded-lg bg-gray-dark-12 w-6/12 cursor-pointer font-primary">
            Buy
          </div>
          <div className="p-2 rounded-lg w-6/12 text-gray-dark-5 cursor-not-allowed font-primary">
            Sell
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div
            type="text"
            className="w-full rounded-lg bg-gray-dark-12 p-5 text-center disabled:cursor-not-allowed disabled:text-gray-dark-4 flex justify-around relative"
          >
            <div className="flex flex-row w-1/2 justify-center align-middle items-center gap-2">
              <Image alt="México" src={MX} width={25} height={"auto"} />
              <span className="text-7 text-white font-primary self-end">
                MXN
              </span>
            </div>
            <span className="text-8 text-white w-1/2">$250.00</span>
            <div className="h-10 rounded-lg border border-gray-dark-5 bg-gray-dark-13 absolute top-[60px] flex justify-center items-center px-10 z-10 text-gray-light-1">
              <span className="text-1">1 BTC - 494.394,45 MXN</span>
            </div>
          </div>

          <div
            type="text"
            className="w-full rounded-lg bg-gray-dark-12 p-5 text-center disabled:cursor-not-allowed disabled:text-gray-dark-4 flex justify-around relative"
          >
            <input
              type="text"
              placeholder="Type a symbol"
              onChange={handleChange}
              disabled={isMutating}
              className="rounded-lg bg-gray-dark-12 text-center disabled:cursor-not-allowed disabled:text-gray-dark-4 w-1/2 text-7 focus:outline-none"
            />
            <span className="text-8 text-white w-1/2">
              <div className="flex justify-center align-middle items-center gap-2">
                <span>0.064561006</span>
                {iconMapper(value) && (
                  <CryptoconLogo icon={iconMapper(value)} />
                )}
              </div>
            </span>
          </div>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            disabled={isMutating}
            className="w-full bg-primary-purple-dark-1 rounded-lg font-semibold p-4 disabled:bg-primary-purple-dark-3 disabled:cursor-not-allowed disabled:text-gray-dark-7 hover:bg-primary-purple font-primary text-6"
          >
            Buy
          </button>
        </div>

        <div className="py-5">
          {isMutating ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <span className="text-gray-dark-1 flex justify-center">
              {data?.return || data?.detail}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-3 flex-col">
        <div className="flex flex-row justify-between">
          <span className="text-4 font-bold">Transactions</span>
          <span className="text-2 text-gray-dark-3 cursor-not-allowed">
            View all
          </span>
        </div>
        <TradesTable trades={trades} />
      </div>
    </div>
  );
}
export default PlaceTrade;
