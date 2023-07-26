import Image from "next/image";
import Ellipsis from "@/assets/menu-ellipsis.svg";
import { Strategies } from "@/utils/getStrategies";
import Chevron from "@/assets/chevron.svg";
import Plus from "@/assets/plus-circle.svg";
import Up from "@/assets/arrow-up.svg";
import "./styles.scss";
import H2 from "../Shared/Header/Header";

const Border = ({ children }) => (
  <div className="rounded-lg border-gradient p-[2px] h-100 cursor-pointer h-full ">
    <div className="items-center justify-center bg-gray-dark-13 rounded-lg h-full">
      {children}
    </div>
  </div>
);

const Strategy = ({ strategy }) => (
  <Border>
    <div className="pt-[14px] pl-[16px] pr-[8px] pb-[8px] h-[112px] sm:h-[112px] md:h-[117px] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-start">
          <span className="text-2 font-bold uppercase">{strategy.name}</span>{" "}
          <Image src={Chevron} alt="Chevron" />
        </div>
        <p className="text-7 font-bold font-primary">${strategy.amount}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-start gap-[4px] scale-90 md:scale-100 ">
          <Image src={Up} alt="up" className="sm:mt-[2px] w-[14px] h-[14px]" />
          <span className="text-1 sm:text-3 text-secondary-green">
            {strategy.percentage}% 24h
          </span>
        </div>
        <div>
          <Image src={Ellipsis} alt="ellipsis" />
        </div>
      </div>
    </div>
  </Border>
);

export async function ActiveStrategies() {
  return (
    <div>
      <H2>Active Strategies</H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-[16px] gap-x-[16px] sm:gap-x-[24px] md:gap-x-[32px]">
        {Strategies.map((strategy) => (
          <Strategy strategy={strategy} key={strategy.name} />
        ))}
        <div className="rounded-lg border-[2px] border-gray-dark-5 h-full cursor-pointer">
          <div className="items-center justify-center bg-gray-dark-13 rounded-lg h-full">
            <div className="h-[112px] sm:h-[112px] md:h-[117px] flex flex-col justify-center align-middle items-center text-center gap-1">
              <Image src={Plus} alt="plus" />
              <span className="text-3 font-bold w-[120px]">
                Start a new strategy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveStrategies;
