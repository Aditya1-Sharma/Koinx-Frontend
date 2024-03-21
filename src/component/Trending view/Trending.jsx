import React, { useEffect, useState } from "react";

function Trending() {
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
        console.log(fetchedData.coins);
        fetchedData.coins.slice(0 , 3);
        setterndingData(fetchedData.coins);
        console.log(fetchedData.coins[0].item.name);
      } catch (error) {
        console.log(error);
      }
    };
  // console.log(terndingData[0].item.small);
  //  console.log(terndingData[0].name);
  const getFirstThreeVal = () => {
    return terndingData.slice(0 , 5)
  }
  return (
    <>
    <div className="bg-white rounded-lg">
      <div className="flex pl-3 text-2xl font-bold pt-3 ">Trending Coins (24h)</div>
      <div className="pt-3">
      {terndingData ? (
        <ul>
          {getFirstThreeVal().map(value => (
            <li key={value.item.id}>
              <div className="flex justify-between items-center pb-2">
                <div className="flex gap-2 pl-3 pb-2 items-center">
                <img className="h-7 rounded-xl" src={value.item.small} alt="img" />
                <div>{value.item.name}</div>
                </div>
                <div className="bg-green-400 p-2 rounded-lg">{(value.item.data.price_change_percentage_24h.usd).toFixed(2)} %</div>
              </div>
            </li> // Rendering fetched data
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>


    </>
  );
}

export default Trending;
