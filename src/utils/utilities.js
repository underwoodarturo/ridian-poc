export function iconMapper(name) {
  switch (name) {
    case "BTC":
      return "Bitcoin";

    case "ETH":
      return "Ethereum";

    case "XRP":
      return "ImmutableX";

    case "BCH":
      return "BitcoinCash";

    case "LTC":
      return "Litecoin";

    case "ADA":
      return "Cardano";

    case "AVAX":
      return "Avalanche";

    case "BNB":
      return "Binance";

    case "TRX":
      return "Tron";

    case "DOT":
      return "PolkadotBadge";

    default:
      return "";
  }
}

export function companyMapper(name) {
  switch (name) {
    case "BTC":
      return "Bitcoin";

    case "ETH":
      return "Ethereum";

    case "XRP":
      return "Ripple";

    case "BCH":
      return "BitcoinCash";

    case "LTC":
      return "Litecoin";

    case "ADA":
      return "Cardano";

    case "AVAX":
      return "Avalanche";

    case "BNB":
      return "Binance";

    case "TRX":
      return "Tron";

    case "DOT":
      return "Polkadot";

    default:
      return "";
  }
}

export const jsDate = (dateString) =>
  new Date(
    dateString.replace(
      /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/,
      "$3-$2-$1T$4:$5:$6"
    )
  );
  
