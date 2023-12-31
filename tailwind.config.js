/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1240px",
      xl: "1440px",
    },
    extend: {
      colors: {
        black: { DEFAULT: "#0D0C0D", "dark-1": "#000000" },
        white: { DEFAULT: "#FCFCFD", "light-1": "#FFFFFF" },
        primary: {
          purple: {
            "light-3": "#BE5CFF",
            "light-2": "#B442FF",
            "light-1": "#A724FF",
            DEFAULT: "#9900FF",
            "dark-1": "#8D00EB",
            "dark-2": "#8100D6",
            "dark-3": "#7600C7",
          },
        },
        secondary: {
          pink: {
            "light-3": "#F877B7",
            "light-2": "#F65AA8",
            "light-1": "#F5389D",
            DEFAULT: "#F20D87",
            "dark-1": "#E40C7E",
            "dark-2": "#D50B76",
            "dark-3": "#C70A6E",
          },
          blue: {
            "light-3": "#5C98FF",
            "light-2": "#4287FF",
            "light-1": "#2474FF",
            DEFAULT: "#005EFF",
            "dark-1": "#0052E0",
            "dark-2": "#0049C7",
            "dark-3": "#003FAD",
            alt: {
              "light-3": "#648BF7",
              "light-2": "#4C79F6",
              "light-1": "#2F63F4",
              DEFAULT: "#0D4AF2",
              "dark-1": "#0B41D5",
              "dark-2": "#0A3ABD",
              "dark-3": "#0932A5",
            },
          },
          green: {
            "light-3": "#7DEDAD",
            "light-2": "#62EA9C",
            "light-1": "#43E589",
            DEFAULT: "#1FE072",
            "dark-1": "#1CCE69",
            "dark-2": "#1AC162",
            "dark-3": "#18B45B",
            alt: {
              "light-3": "#83E7AE",
              "light-2": "#69E29D",
              "light-1": "#4BDD8A",
              DEFAULT: "#29D674",
              "dark-1": "#26C56A",
              "dark-2": "#23B863",
              "dark-3": "#21AB5C",
            },
          },
          red: {
            "light-3": "#FF99A3",
            "light-2": "#FF8591",
            "light-1": "#FF6B7A",
            DEFAULT: "#FF4C5E",
            "dark-1": "#F33F51",
            "dark-2": "#E33546",
            "dark-3": "#D12E3E",
            alt: {
              "light-3": "#F098A1",
              "light-2": "#EE8B95",
              "light-1": "#EC7985",
              DEFAULT: "#E96363",
              "dark-1": "#E64D5C",
              "dark-2": "#D74251",
              "dark-3": "#C63947",
            },
          },
        },
        tertiary: {
          yellow: {
            "light-3": "#FBFBC5",
            "light-2": "#FAFAAE",
            "light-1": "#F8F891",
            DEFAULT: "#F6F66F",
            "dark-1": "#F0F05C",
            "dark-2": "#E9E94E",
            "dark-3": "#E3E34F",
          },
          cyan: {
            "light-3": "#81F9F2",
            "light-2": "#5FF7EF",
            "light-1": "#38F5EB",
            DEFAULT: "#0CF3E7",
            "dark-1": "#0BE4D9",
            "dark-2": "#0AD1C6",
            "dark-3": "#0AC2B9",
          },
          gold: {
            "light-3": "#F4D18B",
            "light-2": "#F2C978",
            "light-1": "#EFC061",
            DEFAULT: "#EDB545",
            "dark-1": "#E6AF41",
            "dark-2": "#E0AA3E",
            "dark-3": "#D8A43B",
          },
          orange: {
            "light-3": "#FFA570",
            "light-2": "#FF995C",
            "light-1": "#FF8942",
            DEFAULT: "#FF7C2E",
            "dark-1": "#FF6C14",
            "dark-2": "#FF5F00",
            "dark-3": "#F05900",
          },
        },
        gray: {
          "light-13": "#F7F7F8",
          "light-12": "#F0EFF0",
          "light-11": "#E8E7E9",
          "light-9": "#E3E2E4",
          "light-8": "#D9D7DA",
          "light-7": "#CFCDD0",
          "light-5": "#BDBABF",
          "light-4": "#B3AFB6",
          "light-3": "#A9A5AC",
          "light-1": "#8B858E",
          DEFAULT: "#817A85",
          "dark-1": "#76717A",
          "dark-3": "#645F67",
          "dark-4": "#5A565D",
          "dark-5": "#524E55",
          "dark-7": "#3B383D",
          "dark-8": "#333135",
          "dark-9": "#29272A",
          "dark-11": "#212022",
          "dark-12": "#1C1B1D",
          "dark-13": "#171618",
        },
      },
      fontFamily: {
        primary: "Ridian",
        sans: "Unica",
      },
    },
    fontSize: {
      0: [
        "10px",
        {
          lineHeight: "14px",
          letterSpacing: "0.015em",
        },
      ],
      1: [
        "11px",
        {
          lineHeight: "15.5px",
          letterSpacing: "0.01em",
        },
      ],
      2: [
        "12px",
        {
          lineHeight: "17px",
          letterSpacing: "0.0075em",
        },
      ],
      3: [
        "13px",
        {
          lineHeight: "18px",
          letterSpacing: "0.005em",
        },
      ],
      4: [
        "14.5px",
        {
          lineHeight: "19.5px",
          letterSpacing: "0.0025em",
        },
      ],
      5: [
        "16.5px",
        {
          lineHeight: "22px",
        },
      ],
      6: [
        "19px",
        {
          lineHeight: "24.5px",
          letterSpacing: "-0.0025em",
        },
      ],
      7: [
        "22.5px",
        {
          lineHeight: "27.5px",
          letterSpacing: "-0.005em",
        },
      ],
      8: [
        "28px",
        {
          lineHeight: "32.5px",
          letterSpacing: "-0.0075em",
        },
      ],
      9: [
        "34px",
        {
          lineHeight: "37.5px",
          letterSpacing: "-0.01em",
        },
      ],
      10: [
        "44px",
        {
          lineHeight: "47px",
          letterSpacing: "-0.0125em",
        },
      ],
      11: [
        "58px",
        {
          lineHeight: "60px",
          letterSpacing: "-0.015em",
        },
      ],
      12: [
        "78px",
        {
          lineHeight: "80px",
          letterSpacing: "-0.015em",
        },
      ],
    },
  },
  plugins: [],
};
