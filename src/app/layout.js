import "./globals.css";
import localFont from "@next/font/local";
const fonts = // localFont({ src: '../fonts/RidianCubic-Regular.woff', })
  localFont({
    src: [
      {
        path: "../fonts/RidianCubic-Regular.woff",
        weight: "400",
        style: "normal",
      },
      {
        path: "../fonts/RidianCubic-Bold.woff",
        weight: "700",
        style: "bold",
      },
      {
        path: "../fonts/Unica77LLWeb-Regular.woff",
        weight: "400",
        style: "normal",
      },
      {
        path: "../fonts/Unica77LLWeb-Bold.woff",
        weight: "700",
        style: "bold",
      },
    ],
  });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-black`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
