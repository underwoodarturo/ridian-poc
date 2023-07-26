const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export const fetcher = (url) =>
  fetch(`${BACKEND_URL}${url}`, {}).then((res) => res.json());

export const sendRequest = (url, { arg }) =>
  fetch(`${BACKEND_URL}${url}/${arg.symbol}`, {
    method: "POST",
  }).then((res) => res.json());
