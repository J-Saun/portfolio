const fetchCryptoPrice = async (base, target) => {
  try {
    const res = await axios.get(
      `https://api.cryptonator.com/api/ticker/${base}-${target}`
    );
    // const base = res.data.ticker.base;
    // console.log(res.data.ticker);
    // console.log(res.data.ticker.base);
    // console.log(res.data.ticker.price);
    // console.log(res.data.ticker.change);
    return res.data.ticker.base;
  } catch (e) {
    console.log("ERROR!", e);
  }
};

const btcWidget = document.querySelector("#btcTicker");
// btcWidget.innerText =
fetchCryptoPrice("btc", "usd");
fetchCryptoPrice("eth", "usd");
fetchCryptoPrice("doge", "usd");
