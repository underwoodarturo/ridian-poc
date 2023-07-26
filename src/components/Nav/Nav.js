"use client";
import { fetcher } from "@/utils/client";
import useSWR from "swr";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Loader } from "../Shared/Spinner/Spinner";
import { useSortDates } from "@/hooks/useSortDates";
import H2 from "../Shared/Header/Header";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function Nav() {
  const {
    data: { hourly_navs, daily_navs } = {},
    isLoading,
    error,
  } = useSWR("/navs", fetcher);

  const { data, setTime, time } = useSortDates({ daily_navs, hourly_navs });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <H2>Navs</H2>

      <Line
        options={options}
        data={{
          datasets: [
            {
              data,
              borderColor: "#8100D6",
              backgroundColor: "#8100D6",
            },
          ],
        }}
      />
      <div className="flex flex-row justify-end gap-4 pt-5">
        <span
          className={`text-2 underline cursor-pointer text-gray-dark-3 ${
            time.time === "24" && "text-white"
          }`}
          onClick={() => setTime({ time: "24", period: "hours" })}
        >
          24 hours
        </span>
        <span
          className={`text-2 underline cursor-pointer text-gray-dark-3 ${
            time.time === "7" && "text-white"
          }`}
          onClick={() => setTime({ time: "7", period: "day" })}
        >
          7 days
        </span>
        <span
          className={`text-2 underline cursor-pointer text-gray-dark-3 ${
            time.time === "30" && "text-white"
          }`}
          onClick={() => setTime({ time: "30", period: "day" })}
        >
          30 days
        </span>
        <span
          className={`text-2 underline cursor-pointer text-gray-dark-3 ${
            time.time === "YTD" && "text-white"
          }`}
          onClick={() => setTime({ time: "YTD", period: "day" })}
        >
          YTD
        </span>
      </div>
    </div>
  );
}
