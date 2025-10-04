import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import food from "../src/assets/food.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-[#f3e5d8]">
        <div className="flex flex-col justify-center items-center bg-white p-7 rounded-2xl w-[35rem] m-7">
          <img src={food} alt="food" className="w-[32rem]" />
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <h3>Preparation time</h3>
          <ul className="list-disc">
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li>Cooking: 5 minutes</li>
          </ul>
          <h2>Ingredients</h2>
          <ul className="list-disc">
            <li>2-3 large eggs</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <h2>Instructions</h2>
          <ol className="list-decimal">
            <li>
              <p className="ml-3">
                {" "}
                <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </p>
            </li>
            <li>
              <p className="ml-3">
                <b>Heat the pan:</b> Place a non-stick frying pan over medium
                heat and add butter or oil.
              </p>
            </li>
            <li>
              <p className="ml-3">
                <b>Cook the omelette:</b> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li>
              <p className="ml-3">
                {" "}
                <b>Add fillings (optional):</b>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </p>
            </li>
            <li>
              <p className="ml-3">
                {" "}
                <b>Fold and serve:</b>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </p>
            </li>
            <li>
              <p className="ml-3">
                <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                needed.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
