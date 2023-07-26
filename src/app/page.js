import { PlaceTrade } from "@/components/PlaceTrade/PlaceTrade";
import { Returns } from "@/components/Returns/Returns";
import { Nav } from "@/components/Nav/Nav";
import { ActiveStrategies } from "@/components/ActiveStrategies/ActiveStrategies";

export default function Page() {
  return (
    <>
      <div className="sticky w-full h-11 top-0 bg-black border-b-gray-dark-9 flex items-center px-10 flex-row-reverse border-b-2 z-50">
        <span className="text-5 text-white font-primary">Arturo Underwood</span>
      </div>
      <div className="text-white container p-[16px] sm:px-[24px] md:px-[42px] font-sans">
        <hr className="my-16 border-gray-dark-9" />
        <Nav />
        <hr className="my-16 border-gray-dark-9" />
        <Returns />
        <hr className="my-16 border-gray-dark-9" />
        <PlaceTrade />
        <hr className="my-16 border-gray-dark-9" />
        <ActiveStrategies />
      </div>
    </>
  );
}
