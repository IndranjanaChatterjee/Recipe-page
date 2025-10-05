import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import food from "../src/assets/food.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-[#f3e5d8] gap-4">
        <div className="flex flex-col justify-center items-center bg-white sm:p-10 rounded-2xl w-[40rem] sm:m-7">
          <img
            src={food}
            alt="food"
            className="w-[36rem] md:rounded-[0.7rem]"
          />
          <div className="p-6 md:p-0">
            <h1 className="text-left w-full font-young-serif-regular font-bold text-4xl mt-7 mb-6">
              Simple Omelette Recipe
            </h1>
            <p className="text-[0.87rem] text-gray-700 font-medium mb-7">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="w-full flex flex-col justify-center items-start bg-[#fff7fc] pt-7 pb-7 pl-11 pr-11 rounded-[0.5rem] mt-1 mb-7">
              <h3 className="text-[#773b54] font-bold w-full text-left relative left-[-1rem] mb-2 text-[1.3rem]">
                Preparation time
              </h3>
              <ul className="list-disc marker:text-[#773b54] text-gray-800 text-[0.95rem]">
                <li className="my-2">
                  <p className="ml-3.5">
                    <b>Total:</b> Approximately 10 minutes
                  </p>
                </li>
                <li className="my-2">
                  <p className="ml-3.5">
                    <b>Preparation:</b> 5 minutes
                  </p>
                </li>
                <li className="my-2">
                  <p className="ml-3.5">
                    <b>Cooking:</b> 5 minutes
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full ml-7 mb-7">
              <h2 className="text-[#7d4733] w-full  relative left-[-1rem] text-[1.85rem] font-semibold mb-2.5">
                Ingredients
              </h2>
              <ul className="list-disc marker:text-[#7d4733] text-gray-700 text-[0.95rem]">
                <li className="my-2">
                  <p className="ml-3">2-3 large eggs</p>
                </li>
                <li className="my-2">
                  <p className="ml-3">Pepper, to taste</p>
                </li>
                <li className="my-2">
                  <p className="ml-3">1 tablespoon of butter or oil</p>
                </li>
                <li className="my-2">
                  <p className="ml-3">
                    Optional fillings: cheese, diced vegetables, cooked meats,
                    herbs
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full h-[0.05rem] bg-gray-500 "></div>
            <div className="mt-7 text-[0.95rem] mb-6 text-gray-700 ml-7">
              <h2 className="text-[#7d4733] w-full relative left-[-1rem]  text-[1.85rem] font-semibold mb-2.5">
                Instructions
              </h2>
              <ol className="list-decimal marker:text-[#7d4733] marker:font-bold">
                <li className="m-2">
                  <p className="ml-3">
                    {" "}
                    <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch
                    of salt and pepper until they are well mixed. You can add a
                    tablespoon of water or milk for a fluffier texture.
                  </p>
                </li>
                <li className="m-2">
                  <p className="ml-3">
                    <b>Heat the pan:</b> Place a non-stick frying pan over
                    medium heat and add butter or oil.
                  </p>
                </li>
                <li className="m-2">
                  <p className="ml-3">
                    <b>Cook the omelette:</b> Once the butter is melted and
                    bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                    evenly coat the surface.
                  </p>
                </li>
                <li className="m-2">
                  <p className="ml-3">
                    {" "}
                    <b>Add fillings (optional):</b>
                    When the eggs begin to set at the edges but are still
                    slightly runny in the middle, sprinkle your chosen fillings
                    over one half of the omelette.
                  </p>
                </li>
                <li className="m-2">
                  <p className="ml-3">
                    {" "}
                    <b>Fold and serve:</b>
                    As the omelette continues to cook, carefully lift one edge
                    and fold it over the fillings. Let it cook for another
                    minute, then slide it onto a plate.
                  </p>
                </li>
                <li className="m-2">
                  <p className="ml-3">
                    <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                    needed.
                  </p>
                </li>
              </ol>
            </div>
            <div className="w-full h-[0.05rem] bg-gray-500 "></div>
            <div className="mt-7 mb-3 ml-7 text-[0.95rem] text-gray-700">
              <div className="flex flex-col justify-center items-start relative left-[-1rem] ">
                <h2 className="text-[#7d4733] w-full  text-[1.85rem] font-semibold mb-2.5">
                  Nutrition
                </h2>

                <p className="my-4 w-full ">
                  The table below shows nutritional values per serving without
                  the additional fillings.
                </p>
                <div className="flex justify-center items-center flex-row  w-full">
                  <div className="w-[50%] flex flex-col justify-center items-start ">
                    <div className="h-[2.5rem] border-b-2 border-gray-400 w-full pl-2.5 my-0.5 flex flex-row justify-start items-center">
                      Calories
                    </div>
                    <div className="h-[2.5rem] border-b-2 border-gray-400 w-full pl-2.5 my-0.5 flex flex-row justify-start items-center">
                      Carbs
                    </div>
                    <div className="h-[2.5rem] border-b-2 border-gray-400 w-full pl-2.5 my-0.5 flex flex-row justify-start items-center">
                      Protein
                    </div>
                    <div className="h-[2.5rem]  w-full pl-2.5 flex flex-row justify-start items-center">
                      Fat
                    </div>
                  </div>
                  <div className="w-[50%] flex flex-col justify-center items-start text-[#7d4733] font-bold">
                    <div className="h-[2.5rem] border-b-2 border-gray-400 w-full pl-2.5 my-0.5 flex flex-row justify-start items-center">
                      277kcal
                    </div>
                    <div className="h-[2.5rem] border-b-2 border-gray-400 w-full pl-2.5 my-0.5 flex flex-row justify-start items-center">
                      0g
                    </div>
                    <div className="h-[2.5rem] border-b-2 border-gray-400 w-full pl-2.5 my-0.5 flex flex-row justify-start items-center">
                      20g
                    </div>
                    <div className="h-[2.5rem]  w-full pl-2.5 flex flex-row justify-start items-center">
                      22g
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.frontendmentor.io/profile/IndranjanaChatterjee">Indranjana Chatterjee</a>.
        </div>
    </>
  );
}

export default App;
