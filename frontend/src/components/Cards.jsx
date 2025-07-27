import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Cards({ item }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="mt-6 flex justify-center m-2">
      <div className="card w-80 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:text-white dark:border">
        <figure className="px-6 pt-6">
          <img
            src={item.image}
            alt={item.title || "Course image"}
            className="rounded-xl h-48 w-full object-cover"
          />
        </figure>

        <div className="card-body px-6 pb-6">
          <h2 className="card-title flex items-center justify-between">
            <span className="truncate max-w-[70%]">{item.name}</span>
            <span className="badge bg-pink-500 text=white text-xs font-medium px-3 py-1 rounded">
              {item.category}
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-2 line-clamp-3">
            {item.title}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="badge badge-outline text-lg font-semibold">
              ${item.price}
            </span>

            <button
              className="btn border-pink-500 btn-sm rounded-full px-6 shadow hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-200"
              aria-label={`Buy ${item.name}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
