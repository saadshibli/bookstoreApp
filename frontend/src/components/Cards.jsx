import React from 'react';

function Cards({ item }) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="card bg-base-100 w-80 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <figure className="px-6 pt-6">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body px-6 pb-6">
          <h2 className="card-title flex items-center justify-between">
            <span className="truncate">{item.name}</span>
            <span className="badge badge-secondary ml-2">{item.category}</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 mb-4">{item.title}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="badge badge-outline text-lg font-semibold">${item.price}</span>
            <button className="btn border-pink-500 btn-sm rounded-full px-6 shadow hover:bg-pink-500 hover:border-pink-500 transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
