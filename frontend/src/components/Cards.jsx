import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Cards({ item }) {
  // Create a unique and valid ID for the modal for each card
  const modalId = `modal_${item.id.replace(/[^a-zA-Z0-9]/g, "")}`;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* The visible card in the grid. Clicking it opens the modal. */}
      <div
        className="mt-4 my-3 p-3 cursor-pointer"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        <div className={`card w-full h-full shadow-xl hover:scale-105 duration-200 flex flex-col ${
            theme === "dark"
              ? "bg-slate-900 text-white border"
              : "bg-base-100"
          }`}>
          <figure className="h-48 flex items-center justify-center p-2 bg-gray-100 dark:bg-slate-800 rounded-t-lg">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-auto object-contain"
            />
          </figure>
          <div className="card-body flex flex-col p-4">
            <div className="flex-grow">
              <div className="badge badge-secondary truncate w-full">{item.category}</div>
              <h2 className="card-title text-base font-bold line-clamp-2 h-12 mt-2">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                By: {item.author}
              </p>
            </div>
            <div className="card-actions justify-between items-center mt-4">
              <div className="badge badge-outline text-lg font-semibold">
                ${item.price}
              </div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-200">
                More Info
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for the detailed view */}
      <dialog id={modalId} className="modal">
        <div className="modal-box w-11/12 max-w-3xl dark:bg-slate-800 dark:text-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col md:flex-row gap-6">
            <figure className="flex-shrink-0 md:w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg shadow-lg w-full"
              />
            </figure>
            <div className="flex flex-col">
              <div className="badge badge-secondary self-start">
                {item.category}
              </div>
              <h2 className="font-bold text-3xl mt-2">{item.name}</h2>
              <p className="py-1 text-lg text-gray-400">By {item.author}</p>
              <p className="text-sm text-gray-500">
                First Published: {item.publishYear || "N/A"}
              </p>
              <p className="mt-4 text-base flex-grow">
                {item.description}
              </p>
              <div className="card-actions justify-end items-center mt-4">
                <div className="badge badge-outline text-2xl p-4">
                  ${item.price}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Closes the modal when clicking outside of it */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Cards;