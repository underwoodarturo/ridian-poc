import { useEffect, useState } from "react";

export function useSortDates({ daily_navs, hourly_navs }) {
  const [time, setTime] = useState({ time: "YTD", period: "day" });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!daily_navs) return;
    if (!hourly_navs) return;
    if (time.period === "day") {
      const dailySorted = Object.fromEntries(
        Object.entries(daily_navs["1"]).sort(
          ([a], [b]) => new Date(a) - new Date(b)
        )
      );
      if (time.time === "YTD") {
        setData(dailySorted);
      } else if (time.time === "30") {
        setData(Object.fromEntries(Object.entries(dailySorted).splice(-30)));
      } else if (time.time === "7") {
        setData(Object.fromEntries(Object.entries(dailySorted).splice(-7)));
      }
    } else if (time.period === "hours") {
      const hourlySorted = Object.fromEntries(
        Object.entries(hourly_navs["1"]).sort(
          ([a], [b]) =>
            new Date(a.replace(" ", "T") + ":00:00") -
            new Date(b.replace(" ", "T") + ":00:00")
        )
      );
      if (time.time === "24") {
        setData(Object.fromEntries(Object.entries(hourlySorted).splice(-24)));
      }
    }
  }, [time, daily_navs, hourly_navs]);

  return { setTime, data, time };
}
