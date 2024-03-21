import { useState, useEffect } from "react";

function Performance() {
  const [terndingData, setterndingData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      const fetchedData = await res.json();
      console.log(fetchedData);
      setterndingData(fetchedData.coins);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(terndingData);
  return (
    <div className="bg-white rounded-lg">
      <div className="text-3xl font-bold sm:text-2xl pt-6 pl-4 rounded-lg pb-5">
        Performance
      </div>

      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col pt-3 gap-2 font-semibold">
          Today's Low
          <span>46930.22</span>
        </div>
        <div className="w-[90%] h-4 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          <div class="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 font-semibold pb-3">
          Today's High
          <span>49343.83</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col pt-3 gap-2 font-semibold">
          52 week Low
          <span>46930.22</span>
        </div>
        <div class="w-[90%] h-4 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
          <div class="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
        <div className="flex flex-col pt-3 gap-2 font-semibold">
          52 week Low
          <span>46930.22</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-5">
         <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold text-xl md:text-2xl text-customDarkBlue pl-4">
            Fundamentals
          </h3>
          <span className="bg-gray-400 w-4 md:w-5 text-center  rounded-full text-xs md:text-sm text-white">
            i
          </span>
        </div>

        <div className="flex flex-row justify-between text-sm md:text-lg flex-wrap lg:flex-nowrap pl-4">
          <div className="flex flex-col font-semibold">
            <ul className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <li className="text-slate-400">Bitcoin Price</li>
              <li className="pr-4 text-eerieBlack">$16,815.46</li>
            </ul>
            <div className="flex flex-row gap-20 md:gap-12 justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">24h Low / 24h High</span>
              <span className="pr-4 text-eerieBlack">
                $16,382.07 / $16,874.12
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">7d Low / 7d High</span>
              <span className="pr-4 text-eerieBlack">
                $16,382.07 / $16,874.12
              </span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">Trading Volume</span>
              <span className="pr-4 text-eerieBlack">$23,249,202,782</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">Market Cap Rank</span>
              <span className="pr-4 text-eerieBlack">#1</span>
            </div>
          </div>

          <div className="flex flex-col font-semibold">
            <div className="flex flex-row gap-28 md:gap-44  justify-between  border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">Market&nbsp;Cap</span>
              <span className="pr-4 text-eerieBlack">$323,507,290,047</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">Market Cap Dominance</span>
              <span className="pr-4 text-eerieBlack">38.343%</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-4 border-gray-400 text-slateGray">
              <span className="text-slate-400">Volume / Market Cap</span>
              <span className="pr-4 text-eerieBlack">0.0718</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-1.5 border-gray-400 items-center text-slateGray">
              <span className="text-slate-400">All-Time High</span>
              <div className="flex flex-col items-end pr-4 text-eerieBlack">
                <span>
                  $69,044.77 <span className="text-red-500">-75.6%</span>
                </span>
                <span className="text-sm">Nov 10, 2021 (about 1 year)</span>
              </div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-1.5 border-gray-400 items-center">
              <span style={{ color: "#768396" }}>All-Time Low</span>
              <div
                className="flex flex-col items-end pr-4"
                style={{ color: "#111827" }}>
                <span>
                  $67.81 <span className="text-green-500">24729.1%</span>
                </span>
                <span className="text-sm">Jul 06, 2013 (over 9 years)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
