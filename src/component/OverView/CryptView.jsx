import Performance from "../../Pages/Performance";
import Chart from "../chart/chart";
import Trending from "../Trending view/Trending";
import CardDesign from "../../img/CardDesign";
import Sentiments from "../Sentiments";
const CryptView = () => {
  return (
    <>
      <div className="mb-3  ml-0 mr-0 text-start px-4 ">
        <a href="">CryptoCurrencies {">>"} Bitcoins </a>
      </div>

      <div className="flex  border border-bottom-4">
        {/* Left side div covering 2/3 of the width */}
        <div className="w-2/3 bg-gray-200 text-start" style={{ height: 600 }}>
          <div className="flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
              className="h-8 px-4"></img>
            <span className="text-2xl">Bitcoin </span>
            <span className="text-gray-500 px-3">BTC </span>
            <span className="bg-gray-500 text-white rounded-lg px-2 py-2 ">
              Rank #1{" "}
            </span>
          </div>
          <Chart />
          <div className="flex flex-nowrap gap-4 justify-center pt-3">
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">Overview</button>
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">Fundamentals</button>
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">News Insights</button>
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">Sentiments</button>
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">Team</button>
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">Technical</button>
            <button className="hover:text-blue-600 hover:underline text-lg font-semibold">Tokenomics</button>
          </div>
          <div className="gap-2">
          <Performance/>
          </div>
        
          <div className="gap-2">
          <Sentiments/>
          </div>
        </div>
        {/* Right side div covering 1/3 of the width */}
        <div className="w-1/3 bg-gray-200">
          <div className="bg-blue-700 text-white mt-11 ml-2 rounded-lg pb-6">
            <p className="font-semibold text-xl align-text-bottom mb-2 pt-8 flex-1 text-center">
              Get Started with Konix
            </p>
            <p className="font-semibold text-xl mb-1 text-center">for FREE</p>
            <br />
            <p>
              With our range of features that you can equip for free , koinx
              allows you to be more educated and aware of the tax reportS
            </p>
            <div className="flex justify-center items-center mb-4 flex-col">
            <CardDesign/>
            <button className="bg-blue-50 p-3 text-black rounded-lg  items-center mt-4 ">Getting started For free </button>
            </div>
          </div>
          <Trending/>
        </div>
      </div>
    </>
  );
};

export default CryptView;
