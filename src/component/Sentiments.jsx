import React from "react";
import SentimentLogo1 from "../img/SentimentLogo1";
import SentimentLogo2 from "../img/SentimentLogo2";

function Sentiments() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold pb-3">Sentiment</h2>
      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-xl font-semibold">Key Events</h3>
        <span className=" bg-slate-500 w-4 md:w-5 text-center  rounded-full text-xs md:text-sm text-white">
          i
        </span>
      </div>
    <div className="flex gap-x-2.5">
      <div className="flex gap-3 pt-3 w-1/2 bg-blue-100 rounded-lg">
        <SentimentLogo1/>
        <div className="flex flex-col">
          <div className="text-2xl pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            eius.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error minus doloribus, corrupti natus et ea atque est accusantium ipsam sed, quos laborum, inventore odio recusandae. Deleniti molestiae dolorum libero animi tempore facere iusto corrupti tenetur?
            </div>
        </div>
      </div>
      <div className="flex gap-3 pt-3 w-1/2  bg-green-100 rounded-lg">
        <SentimentLogo2/>
        <div className="flex flex-col">
          <div className="text-2xl pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            eius.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequuntur, eum debitis similique aut maxime, perspiciatis excepturi incidunt ratione numquam architecto quis velit necessitatibus deserunt quia molestiae libero atque sunt eos repellat possimus cum. Enim?
            </div>
        </div>
      </div>
      <div className=" gap-3 pt-3 w-1/2  bg-blue-100 rounded-lg flex">
        <SentimentLogo1/>
        <div className="flex flex-col">
          <div className="text-2xl pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            eius.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequuntur, eum debitis similique aut maxime, perspiciatis excepturi incidunt ratione numquam architecto quis velit necessitatibus deserunt quia molestiae libero atque sunt eos repellat possimus cum. Enim?
            </div>
        </div>
      </div>
      <div className=" gap-3 pt-3 w-1/2  bg-blue-100 rounded-lg flex">
        <SentimentLogo2/>
        <div className="flex flex-col">
          <div className="text-2xl pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            eius.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequuntur, eum debitis similique aut maxime, perspiciatis excepturi incidunt ratione numquam architecto quis velit necessitatibus deserunt quia molestiae libero atque sunt eos repellat possimus cum. Enim?
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Sentiments;
